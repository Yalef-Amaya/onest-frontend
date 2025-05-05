import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthService );
  const router = inject( Router );

  return authService.verifyAuthenticatedUser().pipe(
    map( isAuthenticated => {
      console.log( 'noAuthGuard', isAuthenticated );

      /** Si esta autenticado */
      if ( isAuthenticated ) {
        router.navigate([ '/admin' ]);  // Redirect to admin portal if authenticated
        return false;                   // Block access to login/register
      }
      return true;                          // Permite el acceso si no está autenticado
    }),
    catchError(( error ) => {
      console.error( error );
      router.navigate(['/']);               // Redirige a home en caso de error
      return [ true ];                      // Permite el acceso en caso de error
    })
  );
};
