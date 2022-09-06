import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface Role {
  role: ROLE;
}

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

  setRole(role: Role) {
    localStorage.setItem('role', JSON.stringify(role));
  }

  get Role() {
    console.log(localStorage.getItem('role'));

    return JSON.parse(
      localStorage.getItem('role') || JSON.stringify(ROLE.USER)
    );
  }
}
