import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {SkillsServiceService} from '../../providers/skills-service.service';
@Component({
  selector: 'app-add-grad',
  templateUrl: './add-grad.component.html',
  styleUrls: ['./add-grad.component.css']
})
export class AddGradComponent implements OnInit {

  constructor(private skillsService:SkillsServiceService) { }
  skillsList;
  newSkill;
  ngOnInit() {
    //this.personalDetails=true;
    this.skillsService.fetchSkills().subscribe((data)=>{console.log(data)
    this.skillsList=data})
  }
  progress=0;
  skills=[];
  personalDetails: boolean = false;
  educationalDetails:boolean=true;
  professionalDetails:boolean=true;
  submitform:boolean=true;

  gradFirstName = new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(50)]);
  gradMiddleName = new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(50)]);
  gradLastName = new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(50)]);
  email = new FormControl('', [Validators.required, Validators.email,Validators.maxLength(255)]);
  street = new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(50)]);
  city = new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(50)]);
  state = new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(50)]);
  gender = new FormControl('male');
  contact = new FormControl(0,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]);

  institute =new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(50)]);
  degree=new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(50)]);
  branch=new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(20)]);

  dateOfJoining = new FormControl('',[Validators.required]);
  joiningLocation=new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(50)]);
  //newSkill= new FormControl(-1,[Validators.required,Validators.minLength(1),Validators.maxLength(50)]);

  submitData() {
    // console.log(this.gradDetails.value)
  }
  addskill() {

    console.log(this.newSkill)
    
    if ( this.newSkill!=undefined && this.newSkill.skillName != '') {
      this.skills.push(this.newSkill);

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
