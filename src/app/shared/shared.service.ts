import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getMockData(): Observable<any> {
    return this.http.get('assets/jsons/mockData.json');
  }

}
