import { Component, OnInit, Input, EventEmitter, Output, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'evc-selector',
  templateUrl: './evc-selector.component.html',
  styleUrls: ['./evc-selector.component.scss']
})
export class EvcSelectorComponent implements OnInit {
  @Input() model: Array<object>;
  @Input() icons: object;
  @Input() nameSelector: string;
  @Input() selected: object;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  active: boolean = false;

  constructor() { 

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {}
  
  toggle($event):void {
    this.active = !this.active;
  }

  selectOption($event, item):void {
    $event.preventDefault();
    this.selected = item;
    this.active = false;
    this.changeValue({originalEvent: event, item: item});
  }

  changeValue(data: object):void {
    this.onChange.emit(data);
  }
}