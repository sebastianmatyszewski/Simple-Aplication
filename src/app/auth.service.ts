import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private loggedInStatus = JSON.parse(
    localStorage.getItem('loggedIn') || 'false'
  );

  //return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })

  login() {
    return this.http.get<any>('api/users');
  }

  setLoginStatus(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get LoginStatus() {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.loggedInStatus.toString()
    );
  }
}
