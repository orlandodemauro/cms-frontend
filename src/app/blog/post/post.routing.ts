import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: PostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
