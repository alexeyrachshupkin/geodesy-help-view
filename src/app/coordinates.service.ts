import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coordinate} from './project/coordinate/coordinate.model';


@Injectable()
export class CoordinatesService {

  coordinates = [
    {x: '1234.1234', y: '1234.3214', z: '1234.3214'},
    {x: '1234.1234', y: '1234.3214', z: '1234.3214'},
    {x: '1234.1234', y: '1234.3214', z: '1234.3214'},
    {x: '1234.1234', y: '1234.3214', z: '1234.3214'},
    {x: '1234.1234', y: '1234.3214', z: '1234.3214'}
  ];
  constructor(private http: HttpClient) {}
  getCoordinates() {
    return this.http.get<Coordinate[]>('http://localhost:8090/coordinates');
  }

}
