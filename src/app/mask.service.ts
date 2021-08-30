import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Mask } from './model/mask';

@Injectable({
  providedIn: 'root'
})
export class MaskService {
  constructor(private http: HttpClient) { }

  getMasks() : Observable<Mask[]>{
    return this.http.get<Mask[]>('/assets/data/mask-list.json');
  }
}
