import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evc-card-big',
  templateUrl: './evc-card-big.component.html',
  styleUrls: ['./evc-card-big.component.scss']
})
export class EvcCardBigComponent implements OnInit {

  @Input() data;
  
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
