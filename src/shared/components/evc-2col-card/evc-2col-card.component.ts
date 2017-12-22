import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evc-2col-card',
  templateUrl: './evc-2col-card.component.html',
  styleUrls: ['./evc-2col-card.component.scss']
})
export class Evc2colCardComponent implements OnInit {

  @Input() data: any;
  @Input() active: any;
  @Input() styleClass: string;

  constructor() {
    console.log(this.styleClass);
   }

  ngOnInit() { }

}
