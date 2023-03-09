import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignupService } from '../Services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      phone: ['']
    });
  }

  signUp() {
    this.signupService.signUpUser(this.signupForm.value)
    .subscribe({
      next:(res=>{
        alert("success")
        this.signupForm.reset();
        this.router.navigate(['login']);
      })
      ,error:(err=>{
        alert("error")

      })
    })
  }

  // onSignup(){
      // if(this.signUpForm.valid){
      //   console.log(this.signUpForm.value)
      //   this.auth.signUp(this.signUpForm.value)
      //   .subscribe({
      //     next:(res=>{
      //       alert(res.message);
      //       this.signUpForm.reset();
      //       this.router.navigate(['login']);
      //     })
      //     ,error:(err=>{
      //       alert(err?.error.message)
      //     })
      //   })
      // }
      // else{
      //   console.log("Form is invalid!!")
      //   ValidateForm.validateAllFormFields(this.signUpForm)
      // }
    //}
}
