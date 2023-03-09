import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignupService } from '../Services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: SignupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
    .subscribe({
      next:(user => {
        if (user) {
          alert("Login success");
          this.loginForm.reset();
          this.router.navigate(['cart']);
        } else {
          alert("User not found");
        }
      })
      ,error:(err=>{
        alert("Something went wrong !!")
      })
      // err => {
      //   alert("Something went wrong !!");
      // }
    });
  }



//     .subscribe({
//       next:(res=>{
//         alert(res.message);
//         this.signUpForm.reset();
//         this.router.navigate(['login']);
//       })
//       ,error:(err=>{
//         alert(err?.error.message)
//       })
//     })
//   }
//   else{
//     console.log("Form is invalid!!")
//     ValidateForm.validateAllFormFields(this.signUpForm)
//   }
}