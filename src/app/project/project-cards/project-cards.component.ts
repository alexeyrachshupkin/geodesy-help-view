import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {ModelNewProject} from '../create-project-form/model.new-project';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss'],
  providers: [ProjectService]
})
export class ProjectCardsComponent implements OnInit {

  projectList: ModelNewProject[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.findProjects().subscribe((projects: ModelNewProject[])=>{
      this.projectList = projects;
    });
  }

}
