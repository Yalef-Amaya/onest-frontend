import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CargosService } from '../../../../services/cargos.service';

@Component({
  selector: 'app-form-register',
  imports: [],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
  cargos: Cargos[] = [];
  isLoading: boolean = true;

  constructor( private vinculacionService: VinculacionService, private cargosService: CargosService) {}

  ngOnInit() {
    this.cargosService.getCargos().subscribe({
      next: ( data ) => {
        console.log( data );
        console.log( 'Successfully obtains cargos');

        this.cargos = data.data ?? [];
      },
      error: (error) => {
        console.error( error );
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onRemove( cargoId: string ) {

    if( ! cargoId ){
      console.error( 'Invalid cargo ID' );
      return;
    }

    this.cargosService.deleteCargoById( cargoId ).subscribe({
      next: (data) => {
        console.log( data );
        console.log( 'Delete cargo successfully' );

        this.ngOnInit();
      },
      error: ( error ) => {
        console.error(error);
      },
      complete: () => {},
    })
  }
}
