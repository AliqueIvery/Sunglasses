import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Earring } from './model/earring';

@Injectable({
  providedIn: 'root'
})
export class EarringService {
  constructor(private http: HttpClient) { }

  getAllEarrings() : Observable<Earring[]>{
    return this.http.get<Earring[]>('/assets/data/earring-list.json');
  }
}
