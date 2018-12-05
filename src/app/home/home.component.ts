import { Component, OnInit } from '@angular/core';
import {Coordinate} from '../project/coordinate/coordinate.model';
import {CoordinatesService} from '../coordinates.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CoordinatesService]
})
export class HomeComponent implements OnInit {

  coordinates: Coordinate[] = [];
  constructor(private coordinatesService: CoordinatesService) { }

  ngOnInit() {
    // this.coordinates = this.coordinatesService.coordinates;
    this.coordinatesService.getCoordinates().subscribe((coordinates: Coordinate[]) => {
      this.coordinates = coordinates;
    });
  }
}
