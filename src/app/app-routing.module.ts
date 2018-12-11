import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ProjectComponent} from './project/project.component';
import {HomeComponent} from './home/home.component';
import {ProjectCardsComponent} from './project/project-cards/project-cards.component';
import {CoordinateComponent} from './project/coordinate/coordinate.component';
import {InputDataComponent} from './project/input-data/input-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectCardsComponent },
  {path: 'project/:id',
    component: ProjectComponent,
    children: [
      { path: 'input-data', component: InputDataComponent, outlet: 'menu' }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
