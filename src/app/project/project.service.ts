import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelNewProject} from './create-project-form/model.new-project';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {}

  createProject(project: ModelNewProject) {
    return this.http.post<ModelNewProject>('http://localhost:8090/createProject',project);
  }

}
