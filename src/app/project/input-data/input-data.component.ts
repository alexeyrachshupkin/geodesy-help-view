import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../project.service';
import {ProjectFile} from '../create-project-form/model.project-file';
import {Coordinate} from '../coordinate/coordinate.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss']
})
export class InputDataComponent implements OnInit {

  blobUrl: string;
  projectFile: ProjectFile;
  coordinates: Coordinate[] = [];
  id: string;
  constructor(private projectService: ProjectService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.paramMap.subscribe(params =>{
      this.id = params.get('id');
    })
    this.projectService.findProjectCoordinates(this.id).subscribe((coordinates:Coordinate[])=>{
      this.coordinates = coordinates;
    })
  }

  downloadFile(){
    this.projectService.getProjectFile(this.id).subscribe((projectFile:ProjectFile)=>{
      this.projectFile = projectFile;
      let block = this.projectFile.base64.split(';');
      let realData = block[1].split(",")[1];
      let lines = atob(realData).trim().split('\n');
      lines.forEach(line =>{
        let value = line.split(",");
        let coordinate = new Coordinate();
        coordinate.name = value[0];
        coordinate.x= +value[1];
        coordinate.y = +value[2];
        coordinate.z= +value[3];
        this.coordinates.push(coordinate);
      });
      let block = this.projectFile.base64.split(';');
      let realData = block[1].split(",")[1];
      let blob = this.b64toBlob(realData, this.projectFile.type,this.projectFile.size);
      this.blobUrl = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = this.blobUrl;
      a.download = this.projectFile.name;
      a.click();
      window.URL.revokeObjectURL(this.blobUrl);
      a.remove();
    });
  }


  private b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }
}
