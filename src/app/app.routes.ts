import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { mainRoutes } from './routes/main.routes';
import { authRoutes } from './routes/auth.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  ...mainRoutes,
  ...authRoutes,
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
