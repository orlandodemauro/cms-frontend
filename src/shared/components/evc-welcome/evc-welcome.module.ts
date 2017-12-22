import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvcWelcomeComponent } from './evc-welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EvcWelcomeComponent
  ],
  declarations: [EvcWelcomeComponent]
})
export class EvcWelcomeModule { }