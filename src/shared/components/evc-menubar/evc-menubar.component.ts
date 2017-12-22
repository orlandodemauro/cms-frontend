import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evc-menubar',
  templateUrl: './evc-menubar.component.html',
  styleUrls: ['./evc-menubar.component.scss']
})
export class EvcMenubarComponent implements OnInit {

  @Input() orientation: string;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    if (this.orientation != 'vertical' && this.orientation != 'horizontal') {
      this.orientation = 'vertical';
    }
  }
}
