import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './blog.routing';

import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
