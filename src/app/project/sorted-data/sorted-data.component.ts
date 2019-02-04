import { Component, OnInit } from '@angular/core';
import {Coordinate} from '../coordinate/coordinate.model';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../project.service';
import {AverageCoordinateModel} from './average-coordinate.model';

@Component({
  selector: 'app-sorted-data',
  templateUrl: './sorted-data.component.html',
  styleUrls: ['./sorted-data.component.scss']
})
export class SortedDataComponent implements OnInit {

  id: string;
  averageCoordinates:AverageCoordinateModel[];

  constructor(private projectService: ProjectService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.paramMap.subscribe(params =>{
      this.id = params.get('id');
    })
    this.projectService.getSortedCoordinates(this.id).subscribe((averageCoordinates:AverageCoordinateModel[])=>{
      this.averageCoordinates = averageCoordinates;
      console.log(this.averageCoordinates);
    })
  }

}
