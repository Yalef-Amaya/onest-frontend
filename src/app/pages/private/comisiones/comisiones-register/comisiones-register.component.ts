import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComisionesService } from '../../../../services/comisiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comisiones-register',
  imports: [ReactiveFormsModule],
  templateUrl: './comisiones-register.component.html',
  styleUrl: './comisiones-register.component.css'
})
export class ComisionesRegisterComponent {
  formData!: FormGroup;
  comisionesId: string = '';
  
  constructor( private comsionService: ComisionesService, private router: Router ) {
    this.formData = new FormGroup({
      // userId: new FormControl('', [ Validators.required ]),
      office: new FormControl('', [ Validators.required ]),
      periodo: new FormControl('', [ Validators.required ]),
      // productosComisionados: new FormControl('', [ Validators.required ]),
      totalComision: new FormControl('', [ Validators.required ])
      // productividadId: new FormControl('', [ Validators.required ]),
      // pagada: new FormControl('', [ Validators.required ]),
      // frecuenciaPago: new FormControl('', [ Validators.required ]),
    });
  }

  onSubmit() {
    const inputData = this.formData.value;

    if( this.formData.valid ) {
      console.log( inputData );

       this.comsionService.createComisiones( inputData ).subscribe({
        next: ( data ) => {
          console.log( data );
          this.router.navigateByUrl( '/admin/comisiones' );
        },
        error: ( error ) => {
          console.log( error );
        },
        complete: () => {
          console.log( 'Complete' );
          this.formData.reset();
        }
    });
      
    }

    
  }
}
