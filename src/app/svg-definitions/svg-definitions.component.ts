import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-definitions',
  templateUrl: './svg-definitions.component.html',
  styleUrls: ['./svg-definitions.component.scss']
})
export class SvgDefinitionsComponent implements OnInit {
    @Input() name: String;
  constructor() { }

  ngOnInit() {
  }
  get absUrl() {
    return window.location.href;
  }
}
