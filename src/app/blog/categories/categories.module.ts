import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './categories.routing';

import { CategoriesComponent } from '../categories/categories.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, routing
  ],
  declarations: [CategoriesComponent]
})
export class CategoriesModule { }
