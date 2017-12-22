import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';

let id: number = 0;

@Component({
  selector: 'evc-tabs-panel',
  templateUrl: './evc-tabs-panel.component.html',
  styleUrls: ['./evc-tabs-panel.component.scss']
})
export class EvcTabsPanelComponent {
  @Input() title: string;
  @Input() descriptionLabel: string;
  @Input() selected: boolean = false;
  id: string;

  ngOnInit() {
    this.id = 'panel-' + id++;
  }
}