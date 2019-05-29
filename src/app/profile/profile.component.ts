import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileObj = [];
  submitted = false;
  profileForm :FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm =this.formBuilder.group({
      primaryPhone:['', Validators.required],
      cellPhone: ['', Validators.required],
      emailAddress: ['', [Validators.required,Validators.email]],
      confirmEmailAddress: ['', Validators.required],
      preferredContact: ['', Validators.required],
      bestTimeContact: ['', Validators.required],
    });
  }
  get f() { return this.profileForm.controls; }
  onSubmit() {    
      this.submitted = true;
      if (this.profileForm.invalid) { 
        return;
      }
      let profileDetails = this.profileForm.value;
      this.profileObj.push(profileDetails);
      console.log(this.profileObj);
    }

}
