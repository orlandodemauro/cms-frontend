import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { BlogService } from '../../../../shared/services/blog.service';
import { Post } from '../../../interfaces/post';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  
  posts: Post[];

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.blogService.getPostsByBlog(params["category"]).then(posts => {
        this.posts = posts as Post[];
      });

    });
  }

  onPostSelected(post: string) {
    if (!post) {
      console.error('Empty Post');
      return;
    }
    this.router.navigate([`blog/post/${post}`]);
  }

}
