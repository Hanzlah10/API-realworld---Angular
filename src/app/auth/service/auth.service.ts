import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerrequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { environment } from 'src/environments/environment';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://api.realworld.io/api';

  constructor(private http: HttpClient) {}
  getUser(response:AuthResponseInterface):CurrentUserInterface{
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${this.apiUrl}/users`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers };

    return this.http
      .post<AuthResponseInterface>(url, data, options)
      .pipe(map(this.getUser));
  }
  getCurrentUser():Observable<CurrentUserInterface>{
    const url  = `${this.apiUrl}/user`
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser))
  }
  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${this.apiUrl}/users/login`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers };

    return this.http
      .post<AuthResponseInterface>(url, data, options)
      .pipe(map(this.getUser));
    }
}


