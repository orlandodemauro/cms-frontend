import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvcDocumentComponent } from './evc-document.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EvcDocumentComponent
  ],
  declarations: [
    EvcDocumentComponent
  ]
})
export class EvcDocumentModule { }
