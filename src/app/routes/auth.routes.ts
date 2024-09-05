import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/auth/login/login.component';
import { RegisterComponent } from '../pages/auth/register/register.component';

export const authRoutes: Routes = [
  {
    path: 'signin',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  // {
  //   path: 'signup',
  //   component: LoginComponent,
  // },
];

