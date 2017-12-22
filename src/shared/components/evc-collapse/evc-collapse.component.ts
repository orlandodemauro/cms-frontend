import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'evc-collapse',
  templateUrl: './evc-collapse.component.html',
  styleUrls: ['./evc-collapse.component.scss'],
  animations: [
    trigger('panelContent', [
      state('hidden', style({
        height: '*',
      })),
      state('visible', style({
        height: '0',
      })),
      transition('visible <=> hidden', animate('450ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class EvcCollapseComponent implements OnInit {
  @Input() active: boolean = false;
  @Output() onToggleDone: EventEmitter<Object> = new EventEmitter();
  @Output() onToggle: EventEmitter<Object> = new EventEmitter();
  animation: boolean = false;
  collapsed: boolean = false;
  constructor() { }

  toggleActived(): void {
    this.active = !this.active;
    this.animation = true;
    this.onToggle.emit({ originalEvent: event, collapsed: this.active });
  }

  toggleDone(event: Event): void {
    this.animation = false;
    this.collapsed = !this.collapsed;
    this.onToggleDone.emit({ originalEvent: event, collapsed: this.active });
  }
  
  ngOnInit() { }


}