import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { EvcTabsPanelComponent } from './evc-tabs-panel.component';

@Component({
  selector: 'evc-tabs',
  templateUrl: './evc-tabs.component.html',
  styleUrls: ['./evc-tabs.component.scss']
})

export class EvcTabsComponent {
  panelsArray: EvcTabsPanelComponent[];
  @Input() orientation: string = "horizontal-top";
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  @ContentChildren(EvcTabsPanelComponent) panels: QueryList<EvcTabsPanelComponent>

  ngAfterContentInit() {
    this.panels.forEach(tabInstance => (this.initPanels(tabInstance)));
    this.panelsArray = this.panels.toArray();  
  }

  initPanels(panel: any):void {
    panel.selected = (panel.selected == 'true');
  }

  changePanelSelected(panel:EvcTabsPanelComponent):void {
    for(let i = 0; i < this.panelsArray.length; i++) {
      this.panelsArray[i].selected = (this.panelsArray[i].id === panel.id) ? true : false;
    }
    this.onChange.emit({originalEvent: event, panel: panel});
  }

  selectTab(event, panel:EvcTabsPanelComponent) {
    event.preventDefault();
    this.changePanelSelected(panel);
    this.onSelect.emit({originalEvent: event, panel: panel});
  }
}


