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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import { ProjectCardsComponent } from './project/project-cards/project-cards.component';
import { ProjectCardComponent } from './project/project-cards/project-card/project-card.component';
import { InputDataComponent } from './project/input-data/input-data.component';
import { UploadComponent } from './project/file/upload/upload.component';
import { SortedDataComponent } from './project/sorted-data/sorted-data.component';
import { AverageCoordinateCardComponent } from './project/average-coordinate-card/average-coordinate-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CoordinateComponent,
    CreateProjectFormComponent,
    ProjectComponent,
    HomeComponent,
    ProjectCardsComponent,
    ProjectCardComponent,
    InputDataComponent,
    UploadComponent,
    SortedDataComponent,
    AverageCoordinateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
