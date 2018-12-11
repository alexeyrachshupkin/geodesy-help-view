import { Component, OnInit } from '@angular/core';
import {Coordinate} from './coordinate/coordinate.model';
import {CoordinatesService} from './coordinates.service';
import {ModelNewProject} from './create-project-form/model.new-project';
import {ProjectService} from './project.service';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

  projectItem: ModelNewProject;
  pipe = new DatePipe('en-US');
  constructor(private projectService: ProjectService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectItem = new ModelNewProject();
    let id = '';
    this.route.paramMap.subscribe(params =>{
      id = params.get('id');
    })
    this.projectService.findById(id).subscribe((project:ModelNewProject)=>{
      console.log(project);
      this.projectItem = project;
    });
  }

}
