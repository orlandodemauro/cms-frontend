import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evc-group-modal',
  templateUrl: './evc-group-modal.component.html',
  styleUrls: ['./evc-group-modal.component.scss']
})
export class EvcGroupModalComponent implements OnInit {
  @Input() styleClass: string = '';
  @Input() model: object[];
  @Input() maxItems: number = 4;
  items: object[];
  remaining: object[];
  maxIndicator: boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.items = this.model;
    
    if (this.model.length > this.maxItems) {
      this.maxIndicator = true;
      this.items = this.model.slice(0,this.maxItems);
      this.remaining = this.model.slice(this.maxItems, this.model.length);
    }
  }

}
