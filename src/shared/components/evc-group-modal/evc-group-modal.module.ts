import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvcGroupModalComponent } from './evc-group-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EvcGroupModalComponent],
  exports: [
    EvcGroupModalComponent
  ]
})
export class EvcGroupModalModule { }
