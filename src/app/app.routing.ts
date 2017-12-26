import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'blog',  loadChildren: 'app/blog/blog.module#BlogModule', }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
