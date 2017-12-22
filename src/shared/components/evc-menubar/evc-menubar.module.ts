import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvcMenubarComponent } from './evc-menubar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EvcMenubarComponent
  ],
  declarations: [
    EvcMenubarComponent
  ]
})
export class EvcMenubarModule { }
