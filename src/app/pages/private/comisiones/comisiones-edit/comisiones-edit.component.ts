import { Component } from '@angular/core';
import { ComisionesService } from '../../../../services/comisiones.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Comisiones } from '../../../../interfaces/comisiones';
import { Response } from '../../../../interfaces/response';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comisiones-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './comisiones-edit.component.html',
  styleUrl: './comisiones-edit.component.css'
})
export class ComisionesEditComponent {
  formData!: FormGroup;
  comisionesId: string = '';

  constructor( private comisionService: ComisionesService, private route: Router, private router: ActivatedRoute ) {
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

  ngOnInit() {
    this.getRouteId();
    this.loadFormData( this.comisionesId );
  }


  private getRouteId () {
    this.router.paramMap.subscribe( params => {
      this.comisionesId = params.get( 'id' ) ?? '';
      console.log('ID de la comision:', this.comisionesId );
    });
  }

  private loadFormData( categoryId: string ) {
    if ( categoryId ) {

      this.comisionService.getComisionesById( this.comisionesId ).subscribe({
        next: ( data: Response<Comisiones> ) => {
          console.log( data );

          this.formData.patchValue({
            office: data?.data?.office,
            periodo: data?.data?.periodo,
            totalComision: data?.data?.totalComision,
          });
        },
        error: (error) => {
          console.error( error );
        }
      });
    }
  }

  onSubmit() {
    const inputData = this.formData.value;

    if( this.formData.valid ) {
      console.log( inputData );

       this.comisionService.createComisiones( inputData ).subscribe({
        next: ( data ) => {
          console.log( data );
          this.route.navigateByUrl( '/admin/comisiones' );
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
