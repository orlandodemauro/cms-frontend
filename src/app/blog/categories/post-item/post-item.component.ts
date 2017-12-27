import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../../interfaces/post';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input()
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

  @Output()
  postSelected: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  selectpost() {
    this.postSelected.emit(this.post['_id']);
  }
}
