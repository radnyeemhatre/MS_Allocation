import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-grad',
  templateUrl: './add-grad.component.html',
  styleUrls: ['./add-grad.component.css']
})
export class AddGradComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //this.personalDetails=true;
  }
  progress=0;
  skills: [String] = ['java'];
  personalDetails: boolean = false;
  educationalDetails:boolean=true;
  professionalDetails:boolean=true;
  submitform:boolean=true;

  gradFirstName = new FormControl('', [Validators.required]);
  gradMiddleName = new FormControl();
  gradLastName = new FormControl();
  email = new FormControl('', [Validators.required, Validators.email]);
  dob = new FormControl();
  street = new FormControl();
  city = new FormControl();
  state = new FormControl();
  gender = new FormControl('male');
  contact = new FormControl();

  institute =new FormControl('', [Validators.required]);
  degree=new FormControl('', [Validators.required]);
  branch=new FormControl('', [Validators.required]);

  dateOfJoining = new FormControl('', [Validators.required]);
  joiningLocation=new FormControl('', [Validators.required]);
  newSkill= new FormControl('');

  submitData() {
    // console.log(this.gradDetails.value)
  }
  addskill() {

    if (this.newSkill.value != '') {
      this.skills.push(this.newSkill.value);
      this.newSkill= new FormControl('');
    }
  }
  removeskill(skill) {
    console.log(skill)
    this.skills.splice(skill, 1)
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  proceedToED(){
    this.educationalDetails=false;
    this.personalDetails=true;
    this.professionalDetails=true;
    this.submitform=true;
    this.progress=33
    //console.log(this.professionalDetails)
  }
  proceedToPD()
  {
    this.professionalDetails=false;
    this.educationalDetails=true;
    this.personalDetails=true;
    this.submitform=true;
    this.progress=66
    //console.log(this.professionalDetails)
  }
  proceedtoPSD()
  {
    this.professionalDetails=true;
    this.educationalDetails=true;
    this.personalDetails=false;
    this.submitform=true;
    this.progress=0
  }
  proceedtoSubmit()
  {
    this.educationalDetails=true;
    this.professionalDetails=true;
    this.personalDetails=true;
    this.submitform=false;
    this.progress=100
  }
  submitForm()
  {
    
  }
}
