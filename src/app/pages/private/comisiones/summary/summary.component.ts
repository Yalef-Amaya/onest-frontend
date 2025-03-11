import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-summary',
  imports: [ReactiveFormsModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  formData!: FormGroup;
  public roles = ['']

  constructor(){
    this.formData = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      typeProduct: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const inputData = this.formData.value;

    if( this.formData.valid ) {
      console.log( inputData );
    }

    this.formData.reset();
  }
}
