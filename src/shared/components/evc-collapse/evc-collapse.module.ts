import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvcCollapseComponent } from './evc-collapse.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EvcCollapseComponent
  ],
  declarations: [
    EvcCollapseComponent
  ]
})
export class EvcCollapseModule { }
