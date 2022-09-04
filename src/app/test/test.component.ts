import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  companyForm = this.fb.group({
    companyName: new FormControl('', [Validators.required]),
    admins: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get admins() {
    return this.companyForm.controls['admins'] as FormArray;
  }

  // addNewAdmin() {
  //   this.admins.push(this.adminForm);
  // }
  addNewAdmin() {
    const fa = this.companyForm.get('admins') as FormArray;
    fa.push(this.createAdress());
  }

  createAdress(): FormGroup {
    // console.log(this.profileForm.get('adresses'));
    return this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit() {
    console.log(this.companyForm.value);
  }
}

// adminForm = this.fb.group({
//   name: new FormControl('', [Validators.required]),
//   email: new FormControl('', [Validators.required, Validators.email]),
// });

// companyForm = this.fb.group({
//   companyName: new FormControl('', [Validators.required]),
//   admins: this.fb.array([]),
// });

// constructor(private fb: FormBuilder) {}

// ngOnInit(): void {}

// get admins() {
//   return this.companyForm.controls['admins'] as FormArray;
// }

// addNewAdmin() {
//   this.admins.push(this.adminForm);
// }
