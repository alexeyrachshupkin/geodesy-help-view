import {Component, OnInit} from '@angular/core';
import {CoordinatesService} from './project/coordinates.service';
import {Coordinate} from './project/coordinate/coordinate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CoordinatesService]
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
