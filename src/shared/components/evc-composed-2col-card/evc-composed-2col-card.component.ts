import { Component, OnInit, Input, ContentChild, ViewChild, ContentChildren, QueryList, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Evc2colCardComponent } from '../evc-2col-card/evc-2col-card.component';

@Component({
  selector: 'evc-composed-2col-card',
  templateUrl: './evc-composed-2col-card.component.html',
  styleUrls: ['./evc-composed-2col-card.component.scss']
})
export class EvcComposed2colCardComponent implements OnInit {
  @Input() data: Array<object>;
  @Input() orientation: string;

  constructor() {}


  ngOnInit() { }

  ngAfterContentInit() {
  }

}
