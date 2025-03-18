import { Component } from '@angular/core';
import { UsersService } from '../../../services/user.service';
import { RouterLink } from '@angular/router';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.component.html', 
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = [];
  isLoading: boolean = true;

  constructor( private userService: UsersService) {}

  ngOnInit(){
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        console.log( 'Successfully obtains users');

        this.users = data.data ?? [];
      },
      error: (error ) => { 
        console.error(error);
        this.isLoading = false
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onRemove( userId : string ){

    if( ! userId ) {
      console.error( 'Invalid user ID' );
      return;
    }

    this.userService.deleteUserById(userId).subscribe({
      next: ( data ) => {
        console.log( data );
        console.log( 'Delete user successfully' );

        this.ngOnInit();
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {},
    });
  }
}
