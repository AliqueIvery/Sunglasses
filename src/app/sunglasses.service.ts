import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Sunglasses } from './model/sunglasses';

@Injectable({
  providedIn: 'root'
})
export class SunglassesService {

  constructor(private http:HttpClient) { }

  getSunglasses() : Observable<Sunglasses[]>{
    return this.http.get<Sunglasses[]>('/assets/data/sunglasses-list.json');
  }
}
