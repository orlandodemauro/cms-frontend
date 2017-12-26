import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: '', loadChildren: 'app/blog/categories/categories.module#CategoriesModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
