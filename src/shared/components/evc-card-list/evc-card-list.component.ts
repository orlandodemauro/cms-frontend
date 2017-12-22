import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evc-card-list',
  templateUrl: './evc-card-list.component.html',
  styleUrls: ['./evc-card-list.component.scss']
})
export class EvcCardListComponent implements OnInit {

  @Input() data;
  @Input() styleClass;
  
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
