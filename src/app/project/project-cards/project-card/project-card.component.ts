import {Component, Input, OnInit} from '@angular/core';
import {ModelNewProject} from '../../create-project-form/model.new-project';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  pipe = new DatePipe('en-US');
  constructor() { }

  ngOnInit() {
  }

  @Input()projectItem;

}
