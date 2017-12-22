import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvcDropdownComponent } from './evc-dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EvcDropdownComponent
  ],
  exports: [
    EvcDropdownComponent
  ]
})
export class EvcDropdownModule { }