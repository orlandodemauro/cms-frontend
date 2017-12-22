import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Evc2colCardComponent } from './evc-2col-card.component';
import { EvcCollapseModule } from '../evc-collapse/evc-collapse.module';
import { EvcCardInfoModule } from '../evc-card-info/evc-card-info.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvcCardInfoModule,
    EvcCollapseModule
  ],
  exports: [
    Evc2colCardComponent
  ],
  declarations: [
    Evc2colCardComponent
  ]
})
export class Evc2colCardModule { }

