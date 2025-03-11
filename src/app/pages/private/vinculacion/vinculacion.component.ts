import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-vinculacion',
  imports: [ ReactiveFormsModule ],
  templateUrl: './vinculacion.component.html',
  styleUrl: './vinculacion.component.css'
})
export class VinculacionComponent {
  formData!: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      ownerId: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
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
