import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  formData!: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      typeDoc: new FormControl('', [Validators.required]),
      nDoc: new FormControl('', [ Validators.required, Validators.maxLength(10)]),
      name: new FormControl('', [Validators.required] ),
      username: new FormControl('', [ Validators.required, Validators.email ]),
      celular: new FormControl('', [ Validators.required, Validators.maxLength(10), Validators.minLength(10) ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      role: new FormControl('', [Validators.required])
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
