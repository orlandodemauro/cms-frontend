import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'evc-search',
  templateUrl: './evc-search.component.html',
  styleUrls: ['./evc-search.component.scss']
})
export class EvcSearchComponent {
  search: string;
  @Input() defaultText: string;
  @Input() iconClass: string;
  @Output() onChange: EventEmitter<Object> = new EventEmitter();
  @Output() onSelect: EventEmitter<Object> = new EventEmitter();

  changeValue(): void {
    this.onChange.emit({event: event, text: this.search});
  }

  btnSend(): void {
    this.onSelect.emit({event: event, text: this.search});
  }
}