import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  @Input() name: String;
  constructor() { }

  ngOnInit() {
  }
  get absUrl() {
    return window.location.href;
  }
}
