import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvcComposed2colCardComponent } from './evc-composed-2col-card.component';
import { Evc2colCardModule } from '../evc-2col-card/evc-2col-card.module';
import { EvcCollapseModule } from '../evc-collapse/evc-collapse.module';
import { EvcCardInfoModule } from '../evc-card-info/evc-card-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Evc2colCardModule,
    EvcCollapseModule,
    EvcCardInfoModule
  ],
  exports: [
    EvcComposed2colCardComponent
  ],
  declarations: [
    EvcComposed2colCardComponent
  ]
})
export class EvcComposed2colCardModule { }

