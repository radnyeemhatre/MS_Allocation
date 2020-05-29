import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SkillsServiceService } from '../../providers/skills-service.service';
import { flatten } from '@angular/compiler';
@Component({
  selector: 'app-add-grad',
  templateUrl: './add-grad.component.html',
  styleUrls: ['./add-grad.component.css']
})
export class AddGradComponent implements OnInit {

  constructor(private skillsService: SkillsServiceService) { }

  skillsList;
  newSkill;
  ngOnInit() {
    //this.personalDetails=true;
    this.skillsService.fetchSkills().subscribe((data) => {
      console.log(data)
      this.skillsList = data
    })
  }

  inputError: boolean = true;
  errorMsg: String = undefined;
  progress = 0;
  skills = [];
  personalDetails: boolean = false;
  educationalDetails: boolean = true;
  professionalDetails: boolean = true;
  submitform: boolean = true;

  gradFirstName = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  gradMiddleName = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  gradLastName = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255)]);
  houseNo = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  street = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  city = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  state = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  zipcode = new FormControl(0, [Validators.required]);
  contact = new FormControl(0, [Validators.required]);
  gender = new FormControl('Male', [Validators.required]);

  institute = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  degree = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  branch = new FormControl('', [Validators.required, Validators.maxLength(20)]);

  dateOfJoining = new FormControl('', [Validators.required]);
  joiningLocation = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  //newSkill= new FormControl(-1,[Validators.required ,Validators.maxLength(50)]);

  nameregx = /^[a-zA-Z]+$/;
  submitData() {
    // console.log(this.gradDetails.value)
  }
  addskill() {

    console.log(this.newSkill)

    if (this.newSkill != undefined && this.newSkill.skillName != '') {
      if (!this.skills.includes(this.newSkill))
        this.skills.push(this.newSkill);
    }
  }
  removeskill(skill) {
    console.log(skill)
    this.skills.splice(skill, 1)
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must  * Enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  checkPersonalInputs() {
    console.log(this.zipcode.value.toString().length)
    console.log(this.contact.value < 1000000000)
    if (this.gradFirstName.hasError('required') || this.gradFirstName.hasError('maxlength') || !this.nameregx.test(this.gradFirstName.value)) {
      this.inputError = true;
      this.errorMsg = " * Enter Valid First Name";
    }
    else if (this.gradMiddleName.hasError('required') || this.gradMiddleName.hasError('maxlength') || !this.nameregx.test(this.gradMiddleName.value)) {
      this.inputError = true;
      this.errorMsg = " * Enter Valid Middle Name";
    }
    else if (this.email.hasError('required') || this.email.hasError('email') || this.email.hasError('maxlength')) {
      this.inputError = true;
      this.errorMsg = " * Enter Valid Email";
    }
    else if (this.contact.hasError('required') || this.contact.value.toString().length != 10) {
      this.inputError = true;
      this.errorMsg = " * Enter 10 digit contact number";
    }
    else if (this.gradLastName.hasError('required') || this.gradLastName.hasError('maxlength') || !this.nameregx.test(this.gradLastName.value)) {
      this.inputError = true;
      this.errorMsg = " * Enter Valid Last Name";
    }
    else if (this.houseNo.hasError('required') || this.houseNo.hasError('maxlength')) {
      this.inputError = true;
      this.errorMsg = " * Enter Valid House No";
    }
    else if (this.street.hasError('required') || this.street.hasError('maxlength')) {
      this.inputError = true;
      this.errorMsg = " * Enter Valid Street Name";
    }
    else if (this.city.hasError('required') || this.city.hasError('maxlength') || !this.nameregx.test(this.city.value)) {
      this.inputError = true;
      this.errorMsg = " * Enter Valid City";
    }
    else if (this.state.hasError('required') || this.state.hasError('maxlength') || !this.nameregx.test(this.state.value)) {
      this.inputError = true;
      this.errorMsg = " * Enter Valid state";
    }

    else if (this.contact.hasError('required') || this.zipcode.value.toString().length != 6) {
      this.inputError = true;
      this.errorMsg = " * Enter avlid zipcode";
    }
    else {
      this.inputError = false
    }
  }
checkEducationalDeatils(){
  if (this.institute.hasError('required') || this.institute.hasError('maxlength') ) {
    this.inputError = true;
    this.errorMsg = " * Enter Valid Institute Name";
  }
  else if (this.degree.hasError('required') || this.degree.hasError('maxlength') ) {
    this.inputError = true;
    this.errorMsg = " * Enter Valid Qualification";
  }
  else if (this.branch.hasError('required') || this.branch.hasError('maxlength') ) {
    this.inputError = true;
    this.errorMsg = " * Enter Valid Branch";
  }
  else{
    this.inputError = false;
  }
}
checkProfessionalDetails(){
  if (this.dateOfJoining.hasError('required') ) {
    this.inputError = true;
    this.errorMsg = " * Enter Joining Date";
  }
  else if (this.joiningLocation.hasError('required') || this.joiningLocation.hasError('maxlength')||this.nameregx.test(this.joiningLocation.value) ) {
    this.inputError = true;
    this.errorMsg = " * Enter Valid Joining Location";
  }
  else{
    this.inputError = false;
  }
}
  proceedToED() {
    console.log("pp")
    this.inputError = false
    this.checkPersonalInputs();
    if (!this.inputError) {
      this.educationalDetails = false;
      this.personalDetails = true;
      this.professionalDetails = true;
      this.submitform = true;
      this.progress = 33;
      this.inputError = false;
      this.errorMsg = undefined;
    }
  }
  proceedToPD() {
   
    this.inputError = false
    this.checkEducationalDeatils();
    if (!this.inputError) {
    this.professionalDetails = false;
    this.educationalDetails = true;
    this.personalDetails = true;
    this.submitform = true;
    this.progress = 66
    }
    //console.log(this.professionalDetails)
  }
  proceedtoPSD() {
    this.professionalDetails = true;
    this.educationalDetails = true;
    this.personalDetails = false;
    this.submitform = true;
    this.progress = 0
  }
  proceedtoSubmit() {
    this.inputError = false;
    this.checkProfessionalDetails();
    if (!this.inputError) {
    this.educationalDetails = true;
    this.professionalDetails = true;
    this.personalDetails = true;
    this.submitform = false;
    this.progress = 100
    }
  }
  submitForm() {

  }
}
