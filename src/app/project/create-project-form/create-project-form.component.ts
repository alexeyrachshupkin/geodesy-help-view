import { Component, OnInit } from '@angular/core';
import {NgbDateAdapter, NgbDateNativeAdapter, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModelNewProject} from './model.new-project';
import {ProjectService} from '../project.service';
import {ProjectFile} from './model.project-file';
import {ModelResponseSaveProject} from './model.response-save-project';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss'],
  providers: [ProjectService,{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class CreateProjectFormComponent implements OnInit {

  fileToUpload: any = null;
  formGroup: FormGroup;
  project:ModelNewProject;

  constructor(private modalService: NgbModal, private projectService: ProjectService, private spinner: NgxSpinnerService) { }

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
    this.formGroup = new FormGroup({
      Name: new FormControl('', [
        Validators.required
      ]),
      Date: new FormControl('', [
        Validators.required
      ]),
      File: new FormControl('', [
        Validators.required])
    });
    this.project = new ModelNewProject();
    this.project.projectFile = new ProjectFile();
    this.project.date = new Date();
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  createProject(modal) {
    this.spinner.show();
    this.project.projectFile.base64=this.fileToUpload;
    console.log(this.project)
    let response: ModelResponseSaveProject;
    this.projectService.createProject(this.project).subscribe(res=>{
      response = res;
    });
    this.spinner.hide();
    modal.close("Close click");
    console.log(response);
  }

}
