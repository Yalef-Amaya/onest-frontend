import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../../../services/user.service';
import { CargosService } from '../../../../services/cargos.service';

@Component({
  selector: 'app-user-register',
  imports: [ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  formData!: FormGroup;
  public roles = ['']

  constructor(private userService: UsersService, private cargosService: CargosService) {
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

  // ngOnInit(){
  //   this.cargoService.getCargos().subscribe({
  //     next: ( data ) => {
  //       console.log( data );
  //     },
  //     error: ( err ) => {
  //       console.error( err );
  //     },
  //     complete: () => {
  //       console.log( 'Obtiene cargos exitosamente' )
  //     }
  //   })
  // }

  onSubmit() {
    const inputData = this.formData.value;

    if( this.formData.valid ) {
      console.log( inputData );

      this.userService.createUsers( inputData ).subscribe({
        next: ( data ) => {
          console.log(data);
        },
        error: (err) => {
          console.error( err );
        },
        complete: () => {
          console.log( 'Register user successfully' );
          this.formData.reset
        }
    })
    }
  }
}
