import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  downloadFile(fileId){
    // let block = this.projectFile.base64.split(';');
    // let realData = block[1].split(",")[1];
    // let blob = this.b64toBlob(realData, this.projectFile.type,this.projectFile.size);
    // this.blobUrl = window.URL.createObjectURL(blob);
    // let a = document.createElement('a');
    // document.body.appendChild(a);
    // a.setAttribute('style', 'display: none');
    // a.href = this.blobUrl;
    // a.download = this.projectFile.name;
    // a.click();
    // window.URL.revokeObjectURL(this.blobUrl);
    // a.remove();
  }
}
