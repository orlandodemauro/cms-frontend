import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PostService } from '../../../shared/services/post.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  post: Post = {
    title: "",
	  state: "",
	  author: {
      name: {
        first: ""
      }
    },
	  publishedDate: null,
	  image: {},
	  content: {
		  brief: "",
		  extended: "",
	  },
	  categories: [],
  };


  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.postService.getPost(params['post']).then(post => {
        this.post = post as Post;
        console.log(post)
      });

    });
  }

  backToBlog() {
    this.router.navigate(['blog']);
  }

}
