import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { AuraHouseHomeComponent } from './aura-house-home/aura-house-home.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'aura-house-home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'aura-house-home', component: AuraHouseHomeComponent, data: { text: 'Aura-House-Home' } },
  { path: 'register-page', component: RegisterPageComponent, data: { text: 'Register-Page' } },
  { path: 'login-page', component: LoginPageComponent, data: { text: 'Login-Page' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
