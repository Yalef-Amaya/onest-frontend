import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-history',
  imports: [ReactiveFormsModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  formData!: FormGroup;
  public roles = ['']

  constructor(){
    this.formData = new FormGroup({
      period: new FormControl('', [Validators.required]),
      typeProtocol: new FormControl('', [Validators.required]),
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
