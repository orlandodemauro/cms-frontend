import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './second-view.routing';

import { SecondViewComponent } from '../second-view/second-view.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, routing, SharedModule
  ],
  declarations: [SecondViewComponent]
})
export class SecondViewModule { }
