import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      //{ path: '', redirectTo: 'first-view', pathMatch: 'full'},
      //{ path: 'first-view', loadChildren: 'app/dashboard/first-view/first-view.module#FirstViewModule', },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
