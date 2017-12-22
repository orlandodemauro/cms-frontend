import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvcCardListComponent } from './evc-card-list.component';
import { EvcGroupModalModule } from '../evc-group-modal/evc-group-modal.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvcGroupModalModule
  ],
  exports: [
    EvcCardListComponent
  ],
  declarations: [
    EvcCardListComponent
  ]
})
export class EvcCardListModule { }
