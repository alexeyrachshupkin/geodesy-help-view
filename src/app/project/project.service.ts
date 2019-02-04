import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ModelNewProject} from './create-project-form/model.new-project';
import {ModelResponseSaveProject} from './create-project-form/model.response-save-project';
import {ProjectFile} from './create-project-form/model.project-file';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {}

  createProject(project: ModelNewProject) {
    return this.http.post<ModelResponseSaveProject>('http://localhost:8090/createProject',project);
  }

  findProjects() {
    return this.http.get<ModelNewProject[]>('http://localhost:8090/projects');
  }

  findById(id: string) {
    let params = new HttpParams().set('id', id);
    return this.http.get<ModelNewProject>('http://localhost:8090/project',{params: params});
  }

  getProjectFile(projectId: string){
    let params = new HttpParams().set('projectId', projectId);
    return this.http.get<ProjectFile>('http://localhost:8090/getProjectFile',{params: params});
  }

  findProjectCoordinates(id: string){
    let params = new HttpParams().set('id', id);
    return this.http.get<Coordinates>('http://localhost:8090/findProjectCoordinates',{params: params});
  }

  getSortedCoordinates(id: string){
    let params = new HttpParams().set('id', id);
    return this.http.get<Coordinates>('http://localhost:8090/sortCoordinate',{params: params});
  }

}
