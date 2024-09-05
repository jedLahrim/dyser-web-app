import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './models/auth.model';
import { Observable, tap } from 'rxjs';
import { User } from './models/user.model';
import { omit } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://dummyjson.com/user/login';
  token = signal<any>(null as any);
  user = signal<User>({} as User);

  constructor(public http: HttpClient) {

  }

  login(username: string = 'emilys', password: string): Observable<Auth> {
    try {
      return this.http.post<Auth>(this.apiUrl, {
        username: 'emilys', password: password,
        expiresInMins: 60, // optional, defaults to 60
      }).pipe(tap((auth) => {
        localStorage.setItem('token', auth.token);
        localStorage.setItem('user', JSON.stringify(omit(auth, ['token', 'refreshToken'])));

        this.token.set(auth.token);
        this.user.set(omit(auth, ['token', 'refreshToken']) as User);
      }));
    } catch (e) {
      throw e;
    }
  }
}
