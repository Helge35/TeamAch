using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace TeamAch.Api.Dal.EF
{
    public static class PasswordHasher
    {
        private static int _saltSize  = 16;
        private static HashAlgorithmName _hashAlgorithmName  = HashAlgorithmName.SHA256;

        public static string HashPassword(string password)
        {
            if (password == null)
                throw new ArgumentNullException(nameof(password));

            // The salt must be unique for each password
            byte[] salt = GenerateSalt(_saltSize);
            byte[] hash = HashPasswordWithSalt(password, salt);

            var inArray = new byte[1 + _saltSize + hash.Length];
            inArray[0] = 0x01;
            Buffer.BlockCopy(salt, 0, inArray, 1, _saltSize);
            Buffer.BlockCopy(hash, 0, inArray, 1 + _saltSize, hash.Length);

            return Convert.ToBase64String(inArray);
        }

        private static byte[] HashPasswordWithSalt(string password, byte[] salt)
        {
            byte[] hash;
            using (var hashAlgorithm = HashAlgorithm.Create(_hashAlgorithmName.Name))
            {
                byte[] input = Encoding.UTF8.GetBytes(password);
                hashAlgorithm.TransformBlock(salt, 0, salt.Length, salt, 0);
                hashAlgorithm.TransformFinalBlock(input, 0, input.Length);
                hash = hashAlgorithm.Hash;
            }

            return hash;
        }

        public static bool VerifyHashedPassword(string hashedPassword, string password)
        {
            if (password == null)
                throw new ArgumentNullException(nameof(password));

            if (hashedPassword == null)
                return false;

            Span<byte> numArray = Convert.FromBase64String(hashedPassword);
            if (numArray.Length < 1)
                return false;

            byte version = numArray[0];
            if (version > 0x01)
                return false;

            var salt = numArray.Slice(1, _saltSize).ToArray();
            var bytes = numArray.Slice(1 + _saltSize).ToArray();

            var hash = HashPasswordWithSalt(password, salt);

            if (FixedTimeEquals(hash, bytes))
                return true;

            return false;
        }

        private static byte[] GenerateSalt(int byteLength)
        {
            using (var cryptoServiceProvider = new RNGCryptoServiceProvider())
            {
                var data = new byte[byteLength];
                cryptoServiceProvider.GetBytes(data);
                return data;
            }
        }

        [MethodImpl(MethodImplOptions.NoInlining | MethodImplOptions.NoOptimization)]
        public static bool FixedTimeEquals(byte[] left, byte[] right)
        {
            if (left.Length != right.Length)
            {
                return false;
            }

            int length = left.Length;
            int accum = 0;

            for (int i = 0; i < length; i++)
            {
                accum |= left[i] - right[i];
            }

            return accum == 0;
        }
    }
}
}
