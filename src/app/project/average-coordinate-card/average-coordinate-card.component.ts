import {Component, Input, OnInit} from '@angular/core';
import {AverageCoordinateModel} from '../sorted-data/average-coordinate.model';

@Component({
  selector: 'app-average-coordinate-card',
  templateUrl: './average-coordinate-card.component.html',
  styleUrls: ['./average-coordinate-card.component.scss']
})
export class AverageCoordinateCardComponent implements OnInit {

  @Input() averageCoordinate: AverageCoordinateModel;
  constructor() { }

  ngOnInit() {
  }

}
