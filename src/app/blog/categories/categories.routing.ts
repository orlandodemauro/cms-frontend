import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: ':category',
    component: CategoriesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
