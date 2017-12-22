import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvcCardComponent, viewMoreDirective } from './evc-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EvcCardComponent
  ],
  declarations: [
    EvcCardComponent,
    viewMoreDirective
  ]
})
export class EvcCardModule { }



