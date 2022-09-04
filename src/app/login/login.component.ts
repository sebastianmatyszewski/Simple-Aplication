import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: [''],
      password: [''],
      // this.loginForm = this.formbuilder.group({
      //   login: ['', Validators.required],
      //   password: ['', Validators.required],
    });
  }
  login() {
    this.authService.login().subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.login === this.loginForm.value.login &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          this.loginForm.reset();
          console.log('Przenoszę');
          this.authService.setLoginStatus(true);
          this.router.navigate(['users']);
          console.log('przenoszę users');
        } else {
          alert('Zły login/hasło');
        }
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
}
