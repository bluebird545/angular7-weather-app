import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    uri = '/rest';

  constructor(private http: HttpClient, private router: Router) { }

  getAll() {
      // return this.http.get<User[]>(`${config.apiUrl}/users`);
  }
  registerUser(user) {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this.http.post(`${this.uri}/newUserRegistration`, user, {headers: headers, responseType: 'text'});

  }
}
