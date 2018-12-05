import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {CoordinateComponent } from './project/coordinate/coordinate.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateProjectFormComponent } from './project/create-project-form/create-project-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoordinateComponent,
    CreateProjectFormComponent,
    ProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
