import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'evc-dropdown',
  templateUrl: './evc-dropdown.component.html',
  styleUrls: ['./evc-dropdown.component.scss'],
  animations: [
    trigger('panelLeave', [
      state('visible', style({
        display: 'block',
        opacity: 1,
      })),
      state('hidden', style({
        display: 'none',
        opacity: 0,
      })),
      state('visible-no-animate', style({
        display: 'block',
        opacity: 1,
      })),
      state('hidden-no-animate', style({
        display: 'none',
        opacity: 0,
      })),
      transition('hidden <=> visible', animate('300ms linear')),
      transition('hidden-no-animate <=> visible-no-animate', animate('0ms linear'))
    ])
  ]
})
export class EvcDropdownComponent implements OnInit {

  @Input() active: boolean = false;
  @Input() animation: boolean = true;
  @Output() onToggleDone: EventEmitter<Object> = new EventEmitter();;
  
  constructor() { }

  ngOnInit() {
  }

  toggleIf():boolean {
    if(this.animation)
      return true;
    else
      return this.active ? true : false;
  }

  toggleDone(event: Event): void {
    this.onToggleDone.emit({ originalEvent: event, active: this.active });
  }
}