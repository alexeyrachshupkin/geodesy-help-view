import { Component, OnInit } from '@angular/core';
import {Coordinate} from './coordinate/coordinate.model';
import {CoordinatesService} from './coordinates.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [CoordinatesService]
})
export class ProjectComponent implements OnInit {

  coordinates: Coordinate[] = [];
  constructor(private coordinatesService: CoordinatesService) { }

  ngOnInit() {
    this.coordinatesService.getCoordinates().subscribe((coordinates: Coordinate[]) => {
      this.coordinates = coordinates;
    });
  }

}
