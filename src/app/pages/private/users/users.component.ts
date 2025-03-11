import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/user.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html', 
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userService = inject(UsersService);

  ngOnInit(){
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error ) => { 
        console.error(error)
      },
      complete: () => {
        console.log( 'Todos los usuarios obtenidos' )
      }
    });
  }
}
