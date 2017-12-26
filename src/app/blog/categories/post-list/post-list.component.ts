import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { BlogService } from '../../../../shared/services/blog.service';
import { PostService } from '../../../../shared/services/post.service';
import { Post } from '../../../interfaces/post';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(
    private blogService: BlogService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  posts: Post[] = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let callback = this.postService.getPosts();
      const par = params["category"];
      if (par) {
        callback = this.blogService.getBlog(par);
      }
      
      callback.then(posts => {
        this.posts = posts.data.results as Post[];
        console.log(posts);
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
