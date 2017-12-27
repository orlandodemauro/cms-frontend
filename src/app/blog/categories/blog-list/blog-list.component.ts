import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { BlogService } from '../../../../shared/services/blog.service';
import { PostService } from '../../../../shared/services/post.service';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Object[];
  selected: string;
  constructor(    
    private blogService: BlogService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.blogService.getBlogList().then(blogs => {
      this.blogs = blogs;
      console.log(blogs)
    });
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selected = params["category"];
    });
  }

  select(category: string = ""): void {
    this.router.navigate([`blog/${category}`]);
  }
}
