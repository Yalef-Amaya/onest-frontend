import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroup} from '@angular/forms';
import { ComisionesService } from '../../../services/comisiones.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comisiones',
  imports: [ ReactiveFormsModule, RouterLink],
  templateUrl: './comisiones.component.html',
  styleUrl: './comisiones.component.css'
})
export class ComisionesComponent {
  comisiones: any;
  isLoading: boolean = true;

  constructor( private comisionesService: ComisionesService ) {}

  ngOnInit() {
    this.comisionesService.getComisiones().subscribe({
      next: ( data ) => {
        console.log( data );
        console.log( 'Successfully obtains comsiones' );

        this.comisiones = data.data ?? [];    // Asignara una lista vacia para evitar asignar undefined
      },
      error: ( error ) => {
        console.error( error );
        this.isLoading = false;               // Asegura que el estado de carga se actualice en caso de error
      },
      complete: () => {
        this.isLoading = false;               // También lo actualiza cuando la petición es exitosa
      }
    });
  }

  onRemove( comisionesId : string ) {

    if( ! comisionesId ) {
      console.error( 'Invalid product ID' );
      return;
    }

    this.comisionesService.deleteComisionesById( comisionesId ).subscribe({
      next: ( data ) => {
        console.log( data );
        console.log( 'Delete comision successfully' );

        this.ngOnInit();    // Actualiza datos
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {},
    });
  }
}
