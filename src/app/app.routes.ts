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
import { ApplicationInitStatus } from '@angular/core';
import { ApplicationsComponent } from './pages/private/vinculacion/applications/applications.component';
import { FormRegisterComponent } from './pages/private/vinculacion/form-register/form-register.component';
import { FormEditComponent } from './pages/private/vinculacion/form-edit/form-edit.component';

export const routes: Routes = [
    { path: 'home', component:  HomeComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'register', component:  RegisterComponent },
    { path: 'credits', component:  CreditsComponent },
    { path: 'admin', component:  AdminComponent },
    { path: '404', component:  PageNotFoundComponent },
    { path: 'comisiones', component: ComisionesComponent },
    { path: 'comisiones/detail', component: DetailComponent },
    { path: 'comisiones/history', component: HistoryComponent },
    { path: 'comisiones/protocols', component: ProtocolsComponent },
    { path: 'comisiones/summary', component: SummaryComponent },
    { path: 'productividad', component: ProductividadComponent },
    { path: 'productividad/goals', component: GoalsComponent },
    { path: 'productividad/incentives', component: IncentivesComponent },
    { path: 'productividad/sales', component: SalesComponent },
    { path: 'vinculacion', component: VinculacionComponent },
    { path: 'vinculacion/applications', component: ApplicationsComponent },
    { path: 'vinculacion/form-register', component: FormRegisterComponent },
    { path: 'vinculacion/form-edit', component: FormEditComponent },
    { path: 'admin/users', component: UsersComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];


/** Resumen
 *  Detalle
 *  Historial
 *  Protocolos
 */