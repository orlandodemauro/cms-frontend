import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evc-card-info',
  templateUrl: './evc-card-info.component.html',
  styleUrls: ['./evc-card-info.component.scss']
})
export class EvcCardInfoComponent implements OnInit {

  @Input() data: Array<object>;

  constructor() { }

  ngOnInit() { }

}
