import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../../../services/user.service';
import { CargosService } from '../../../../services/cargos.service';
import { OfficesService } from '../../../../services/offices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  imports: [ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  formData!: FormGroup;
  cargos: any;
  offices: any;
  userId: string = '';

  constructor(
    private userService: UsersService, 
    private cargosService: CargosService,
    private officesService: OfficesService,
    private router: Router
  ) {
    console.log('%c constructor: Se ejecuta cuando Angular instancia el componente.', 'color: blue');

    this.formData = new FormGroup({
      typeDoc: new FormControl('', [Validators.required]),
      nDoc: new FormControl('', [ Validators.required, Validators.maxLength(10)]),
      name: new FormControl('', [Validators.required] ),
      username: new FormControl('', [ Validators.required, Validators.email ]),
      celular: new FormControl('', [ Validators.required, Validators.maxLength(10), Validators.minLength(10) ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      cargo: new FormControl('', [Validators.required]),
      office: new FormControl('', [ Validators.required])
    });
  }

  ngOnInit(){
    this.loadCargos();
    this.loadOffices();

  }

  private loadCargos() {
    this.cargosService.getCargos().subscribe({
      next: ( data ) => {
        console.log(data.data);
        this.cargos = data.data ?? [];

        console.log( 'Cargos obtained successfully');
      },
      error: ( error ) => {
        console.error( error );
      }
    });
  }

  private loadOffices() {
    this.officesService.getOffices().subscribe({
      next: ( data ) => {
        console.log( data.data );
        this.offices = data.data ?? [];

        console.log( 'Offices obtained successfully')
      },
      error: ( error ) => {
        console.error( error );
      } 
    });
  }

  onSubmit() {
    const inputData = this.formData.value;

    if( this.formData.valid ) {
      console.log( inputData );

      this.userService.createUser( inputData ).subscribe({
        next: ( data ) => {
          console.log(data);
          console.log( 'User registered successfully');

          this.router.navigateByUrl( 'admin/users');
        },
        error: (error) => {
          console.error( error );
        },
        complete: () => {
          this.formData.reset
        }
    });
    }

    this.formData.reset();
  }
}
