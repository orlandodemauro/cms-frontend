import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvcSearchComponent } from './evc-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EvcSearchComponent
  ],
  declarations: [
    EvcSearchComponent
  ]
})
export class EvcSearchModule { }

