import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './categories.routing';

import { CategoriesComponent } from '../categories/categories.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { BlogListComponent } from './blog-list/blog-list.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, routing
  ],
  declarations: [CategoriesComponent, PostListComponent, PostItemComponent, BlogListComponent]
})
export class CategoriesModule { }
