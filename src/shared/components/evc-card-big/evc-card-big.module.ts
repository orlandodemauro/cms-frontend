import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvcCardBigComponent } from './evc-card-big.component';
import { EvcCardListModule } from '../evc-card-list/evc-card-list.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvcCardListModule
  ],
  exports: [
    EvcCardBigComponent
  ],
  declarations: [
    EvcCardBigComponent
  ]
})
export class EvcCardBigModule { }
