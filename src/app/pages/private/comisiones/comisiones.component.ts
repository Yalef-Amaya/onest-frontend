import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroup} from '@angular/forms';
import { ComisionesService } from '../../../services/comisiones.service';

@Component({
  selector: 'app-comisiones',
  imports: [ ReactiveFormsModule],
  templateUrl: './comisiones.component.html',
  styleUrl: './comisiones.component.css'
})
export class ComisionesComponent {
  formData!: FormGroup;

  constructor( private comisionesService: ComisionesService) {
    this.formData = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      period: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const inputData = this.formData.value;

    if( this.formData.valid ) {
      console.log( inputData );

      this.comisionesService.createComisiones( inputData ).subscribe({
        next: ( data ) => {
          console.log(data);
        },
        error: (err) => {
          console.error( err );
        },
        complete: () => {
          console.log( 'Register comision successfully' );
          this.formData.reset
        }
      })
    }
  }
}
