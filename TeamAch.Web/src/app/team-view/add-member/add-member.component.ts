import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/common/models/member';
import { TeamService } from 'src/app/common/services/team.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  member: Member = new Member();
  form = this.formBuilder.group({
    "name": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "phone": new FormControl("", Validators.required),
    "birthday": new FormControl("", Validators.required),
  });

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.member.iconPath = event.target.result;
      }
    }
  }

  onSubmit() {
    this.router.navigate(['details', { id: this.member.name }]);
    this.activeModal.close();
  }

  constructor(private router: Router, private teamService: TeamService, private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
