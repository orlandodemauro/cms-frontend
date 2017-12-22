import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvcSelectorComponent } from './evc-selector.component';
import { FormsModule } from '@angular/forms';
import { EvcDropdownModule } from '../evc-dropdown/evc-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvcDropdownModule
  ],
  exports: [
    EvcSelectorComponent
  ],
  declarations: [
    EvcSelectorComponent
  ]
})
export class EvcSelectorModule { }
