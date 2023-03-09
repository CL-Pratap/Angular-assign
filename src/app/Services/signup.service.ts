import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signUpUser(user: any) {
    return this.http.post<any>("https://localhost:7231/api/Employees", user);
  }

  login(email: string, password: string) {
    return this.http.get<any>("https://localhost:7231/api/Employees")
      .pipe(
        map(users => {
          const user = users.find((a: any) => {
            return a.email === email && a.password === password;
          });
          return user;
        })
      );
  }
}
