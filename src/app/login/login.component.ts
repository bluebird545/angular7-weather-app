import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthService } from '../services';
// import { AlertService } from '../services/alert.service';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;

    uri = '/rest';

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
        private alertService: AlertService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        } else {
            const obj = this.loginForm.value;
            this.authService.login(this.f.email.value, this.f.password.value)
                .pipe(first())
                .subscribe(
                    data => {
                        this.router.navigate(['dashboard']);
                    },
                    error => {
                        console.log("error: ", error);
                    });

        }


        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
    }

}
