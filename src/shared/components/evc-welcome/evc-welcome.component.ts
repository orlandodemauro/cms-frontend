import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'evc-welcome',
  templateUrl: './evc-welcome.component.html',
  styleUrls: ['./evc-welcome.component.scss']
})
export class EvcWelcomeComponent implements OnInit {
  @Input() config: any;
  
  constructor() { }

  ngOnInit() {
    this.config.date = this.config.date.today.toLocaleDateString(this.config.date.languageDate, this.config.date.formatDate);
  }
}