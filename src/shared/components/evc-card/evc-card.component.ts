import { Component, OnInit, Input, QueryList, ContentChildren, ViewChild, Renderer2, ElementRef, EventEmitter, Output, ViewContainerRef, Renderer } from '@angular/core';
import { Directive } from '@angular/core';
import { ContentChild } from '@angular/core/src/metadata/di';
import { Element } from '@angular/compiler';

@Directive({
  selector: '[evc-view-more]'
})
export class viewMoreDirective implements OnInit{
  list: HTMLElement;
  items: NodeListOf<HTMLLIElement>;

  constructor(public viewContainerRef: ViewContainerRef, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.list = this.el.nativeElement.querySelectorAll('[list]');
    console.log(this.list);
    this.items = this.el.nativeElement.querySelectorAll('li:nth-last-child(-n+4)');
    
    for(let i: number = 0; i<this.items.length; i++) {
      this.items[i].style.display = 'none';
    }
  }

  setList(){
    for(let i: number = 0; i<this.items.length; i++) {
      this.items[i].style.display = 'block';
    }
  }

}

@Component({
  selector: 'evc-card',
  templateUrl: './evc-card.component.html',
  styleUrls: ['./evc-card.component.scss']
})
export class EvcCardComponent implements OnInit {

  @Input() config: object;
  @Input() maxItems: number = 0;
  @ViewChild(viewMoreDirective) viewMoreDirective: any;

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit() {
    console.log(this.viewMoreDirective);
  }

  viewMore(event) {
    event.preventDefault();
    this.viewMoreDirective.setList();
  }
}
