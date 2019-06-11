import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService {
    uri = '/rest';
    // private currentUserSubject: BehaviorSubject<User>;
    // public currentUser: Observable<User>;
    //
    constructor(private http: HttpClient) {
        // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        // this.currentUser = this.currentUserSubject.asObservable();
    }
    // public get currentUserValue(): User {
    //     return this.currentUserSubject.value;
    // }
    login(email: string, password: string) {
        return this.http.post<any>(`${this.uri}/login`, {email, password})
            .pipe(map(user => {
                // login successful if there's jwt token in the response
                // if (user && user.id) {
                    // store user details
                // }
                return user;
                console.log("User: ", user);
            }));
    }
}
