import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { CreditsComponent } from './pages/public/credits/credits.component';
import { AdminComponent } from './pages/private/admin/admin.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';
import { UsersComponent } from './pages/private/users/users.component';

export const routes: Routes = [
    { path: 'home', component:  HomeComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'register', component:  RegisterComponent },
    { path: 'credits', component:  CreditsComponent },
    { path: 'admin', component:  AdminComponent },
    { path: '404', component:  PageNotFoundComponent },
    { path: 'admin/users', component: UsersComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];
