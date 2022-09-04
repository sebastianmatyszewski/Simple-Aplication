import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Resolve, TitleStrategy } from '@angular/router';
import { Component, OnInit, Type } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  title?: string | Type<Resolve<string>>;
  //@ts-ignore
  profileForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.routeConfig?.title;
    this.profileForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.maxLength(255)]],
        lastName: ['', [Validators.required, Validators.maxLength(255)]],
        password: ['', [Validators.required, Validators.maxLength(255)]],
        confirmPassword: ['', [Validators.required]],
        adresses: this.fb.array([this.createAdress()]),
      },
      { validator: this.checkPasswords }
    );
  }

  get adresses(): FormArray {
    return <FormArray>this.profileForm.get('adresses');
  }

  addAdress() {
    const formArray = this.profileForm.get('adresses') as FormArray;
    formArray.push(this.createAdress());
  }

  createAdress(): FormGroup {
    return this.fb.group({
      street: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      zip: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
    });
  }

  deleteAdress(i: number) {
    const formArray = this.profileForm.get('adresses') as FormArray;
    formArray.removeAt(i);
    if (formArray.length === 0) this.addAdress();
  }
  addUser() {
    console.log(this.profileForm.valid ? this.profileForm.value : 'invalid');
    console.log(this.profileForm.errors);
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
