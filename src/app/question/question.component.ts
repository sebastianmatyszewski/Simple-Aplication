import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  questionForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      content: [''],
      type: [''],
    });
    console.log('questionForm init', this.questionForm.getRawValue());

    this.addABCDControl();
    console.log('questionForm add ABCD', this.questionForm.getRawValue());

    this.removeControl();
    console.log('questionForm remove', this.questionForm.getRawValue());

    this.addScaleControl();
    console.log('questionForm add scale', this.questionForm.getRawValue());
    this.removeControl();
    console.log('questionForm remove', this.questionForm.getRawValue());
    this.addABCDControl();
    console.log('questionForm add ABCD', this.questionForm.getRawValue());
    this.addABCDQuestion();
    console.log('add', this.questionForm.getRawValue());
  }

  addScaleControl() {
    this.questionForm.addControl('scaleFrom', this.fb.control(null));
    this.questionForm.addControl('scaleTo', this.fb.control(null));
  }
  addABCDControl() {
    let ABCD = this.questionForm.addControl(
      'arrayWithABCD',
      this.fb.array(['Odpowiedz A', 'Odpowiedz B'])
    );
  }

  removeControl() {
    this.questionForm.removeControl('arrayWithABCD');
    this.questionForm.removeControl('scaleFrom');
    this.questionForm.removeControl('scaleTo');
  }

  addABCDQuestion() {
    this.ABCDControl.push(new FormControl('Odpowiedz C'));
  }

  get ABCDControl() {
    return this.questionForm.get('arrayWithABCD') as FormArray;
  }
}
