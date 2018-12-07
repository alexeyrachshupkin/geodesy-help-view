import { Component, OnInit } from '@angular/core';
import {NgbDateAdapter, NgbDateNativeAdapter, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModelNewProject} from './model.new-project';
import {ProjectService} from '../project.service';
import {ProjectFile} from './model.project-file';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss'],
  providers: [ProjectService,{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class CreateProjectFormComponent implements OnInit {

  fileToUpload: any = null;

  project:ModelNewProject = new ModelNewProject();

  constructor(private modalService: NgbModal, private projectService: ProjectService) { }

  ngOnInit() {
  }

  handleFileInput(target) {
    this.readThis(target);
  }

  readThis(inputValue: any): void {
    let file:File = inputValue.files[0];
    this.project.projectFile = new ProjectFile();
    this.project.projectFile.name=file.name;
    this.project.projectFile.size=file.size;
    this.project.projectFile.type=file.type;
    let myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.fileToUpload = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  createProject() {
    this.project.projectFile.base64=this.fileToUpload;
    console.log(this.project)
    let result;
    this.projectService.createProject(this.project).subscribe(res=>{
      result = res;
    });
    console.log(result)
  }

}
