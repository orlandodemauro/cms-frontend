import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cr-header',
  templateUrl: './cr-header.component.html',
  styleUrls: ['./cr-header.component.scss']
})
export class crHeaderComponent implements OnInit {

  menuModel: Array<object>;

  constructor() { }
  
  ngOnInit() {
    this.menuModel = [
      {
        title: 'Home',
        url: '/home'
      },
      {
        title: 'Blog',
        url: '/blog'
      },
      {
        title: 'Gallery',
        url: '#'
      },
      {
        title: 'Sign In',
        url: '#'
      }
    ];
  }

}
