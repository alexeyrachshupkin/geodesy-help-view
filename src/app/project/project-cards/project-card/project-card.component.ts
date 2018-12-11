import {Component, Input, OnInit} from '@angular/core';
import {ModelNewProject} from '../../create-project-form/model.new-project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()projectItem;

}
