import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthService } from '../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;

    uri = '/rest';

      constructor(
          private fb: FormBuilder,
          private router: Router,
          private authService: AuthService,
          private userService: UserService,
          private alertService: AlertService,
          private http: HttpClient
      ) {
          // redirect to home if already logged in
          // if (this.authService.currentUserValue) {
          //     this.router.navigate(['/']);
          // }
      }

      ngOnInit() {
          this.registerForm = this.fb.group({
              email: ['', [Validators.required, Validators.email]],
              password: ['', [Validators.required, Validators.minLength(6)]],
              confirmPassword: ['', Validators.required]
          }, {
              validator: this.passwordMatchValidator('password', 'confirmPassword')
          });
      }

      // custom validator to check that two fields match
      passwordMatchValidator(controlName: string, matchingControlName: string) {
          return (formGroup: FormGroup) => {
              const control = formGroup.controls[controlName];
              const matchingControl = formGroup.controls[matchingControlName];

              if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                  // return if another validator has already found an error on the matchingControl
                  return;
              }

              // set error on matchingControl if validation fails
              if (control.value !== matchingControl.value) {
                  matchingControl.setErrors({ mustMatch: true });
              } else {
                  matchingControl.setErrors(null);
              }
          }
      }
      // convenience getter for easy access to form fields
      get f() { return this.registerForm.controls; }

      onSubmit() {
          this.submitted = true;

          // stop here if form is invalid
          if (this.registerForm.invalid) {
              return;
          }

          const obj = this.registerForm.value;
          this.userService.registerUser(obj)
            // .then(() => res.json({}))
            // .catch(err => next(err));
                .subscribe( (res) => {
                    console.log("Response: ", res);
                    this.router.navigate(['/login']);
                }, err => {
                    console.log("Error: ", err)
                });
          // console.log(obj);
          // this.http.post(`${this.uri}/newUserRegistration`, obj)
          //     .subscribe(res => console.log('Done'));
          // this.router.navigate(['/login']);
      }

}
