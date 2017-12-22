import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evc-tags',
  templateUrl: './evc-tags.component.html',
  styleUrls: ['./evc-tags.component.scss']
})
export class EvcTagsComponent implements OnInit {
  @Input() model: Array<object>;
  
  constructor() { }

  ngOnInit() {
  }

}
