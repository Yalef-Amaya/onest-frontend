import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-protocols',
  imports: [ ReactiveFormsModule],
  templateUrl: './protocols.component.html',
  styleUrl: './protocols.component.css'
})
export class ProtocolsComponent {
  formData!: FormGroup;
  public roles = ['']

  constructor(){
    this.formData = new FormGroup({
      year: new FormControl('', [Validators.required]),
      typeProduct: new FormControl('', [Validators.required]),
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
