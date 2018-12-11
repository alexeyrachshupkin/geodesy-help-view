import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ModelNewProject} from './create-project-form/model.new-project';
import {ModelResponseSaveProject} from './create-project-form/model.response-save-project';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {}

  createProject(project: ModelNewProject) {
    return this.http.post<ModelResponseSaveProject>('http://localhost:8090/createProject',project);
  }

  findProjects() {
    return this.http.get<ModelNewProject[]>('http://localhost:8090/projects');
  }

  findById(id: String) {
    let params = new HttpParams().set('id', id);
    return this.http.get<ModelNewProject[]>('http://localhost:8090/project',{params: params});
  }

}
