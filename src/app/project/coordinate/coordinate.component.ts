import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-coordinate',
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.scss']
})
export class CoordinateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()coordinate;
}
