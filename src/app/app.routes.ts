import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { CreditsComponent } from './pages/public/credits/credits.component';
import { AdminComponent } from './pages/private/admin/admin.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';
import { UsersComponent } from './pages/private/users/users.component';
import { ComisionesComponent } from './pages/private/comisiones/comisiones.component';
import { ProductividadComponent } from './pages/private/productividad/productividad.component';
import { VinculacionComponent } from './pages/private/vinculacion/vinculacion.component';
import { GoalsComponent } from './pages/private/productividad/goals/goals.component';
import { IncentivesComponent } from './pages/private/productividad/incentives/incentives.component';
import { SalesComponent } from './pages/private/productividad/sales/sales.component';
import { DetailComponent } from './pages/private/comisiones/detail/detail.component';
import { HistoryComponent } from './pages/private/comisiones/history/history.component';
import { ProtocolsComponent } from './pages/private/comisiones/protocols/protocols.component';
import { SummaryComponent } from './pages/private/comisiones/summary/summary.component';
import { FormRegisterComponent } from './pages/private/vinculacion/form-register/form-register.component';
import { FormEditComponent } from './pages/private/vinculacion/form-edit/form-edit.component';
import { UserRegisterComponent } from './pages/private/users/user-register/user-register.component';

export const routes: Routes = [
    { path: 'home', component:  HomeComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'register', component:  RegisterComponent },
    { path: 'credits', component:  CreditsComponent },
    { path: 'admin', component:  AdminComponent },
    { path: '404', component:  PageNotFoundComponent },
    { path: 'admin/comisiones', component: ComisionesComponent },
    { path: 'admin/productividad', component: ProductividadComponent },
    { path: 'admin/vinculacion', component: VinculacionComponent },
    { path: 'admin/users', component: UsersComponent },
    { path: 'admin/users/new', component: UserRegisterComponent},
    { path: 'admin/comisiones/detail', component: DetailComponent },
    { path: 'admin/comisiones/history', component: HistoryComponent },
    { path: 'admin/comisiones/protocols', component: ProtocolsComponent },
    { path: 'admin/comisiones/summary', component: SummaryComponent },
    { path: 'admin/productividad/goals', component: GoalsComponent },
    { path: 'admin/productividad/incentives', component: IncentivesComponent },
    { path: 'admin/productividad/sales', component: SalesComponent },
    { path: 'admin/vinculacion/form-register', component: FormRegisterComponent },
    { path: 'admin/vinculacion/form-edit', component: FormEditComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

