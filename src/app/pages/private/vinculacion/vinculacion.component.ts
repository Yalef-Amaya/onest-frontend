import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { Cargo } from '../../../interfaces/cargos';
// import { CargosService } from '../../../services/cargos.service';

@Component({
  selector: 'app-vinculacion',
  imports: [ ],
  templateUrl: './vinculacion.component.html',
  styleUrl: './vinculacion.component.css'
})
export class VinculacionComponent {
  // cargos: Cargo[] = [];
  // isLoading: boolean = true;

  // constructor( private cargosService: CargosService) {}

  // ngOnInit() {
  //   this.cargosService.getCargos().subscribe({
  //     next: ( data ) => {
  //       console.log( data );
  //       console.log( 'Succesfully obtains cargos');

  //       this.cargos = data.data ?? [];
  //     },
  //     error: ( error ) => {
  //       console.error( error );
  //       this.isLoading = false;
  //     },
  //     complete: () => {
  //       this.isLoading = false
  //     }
  //   })
  // }

  // onRemove( cargoId : string ){

  //   if( ! cargoId ){
  //     console.error( 'Invalid cargo ID' );
  //     return;
  //   }

  //   this.cargosService.deleteCargoById( cargoId ).subscribe({
  //     next: ( data ) => {
  //       console.log( data );
  //       console.log( 'Delete cargo ')
  //     }
  //   })
  // }
}
