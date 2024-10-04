import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL ="https://www.themealdb.com/api/json/v1/1/search.php?s="

  constructor(private http:HttpClient) { }


  solicitud():Observable<any>{
    return this.http.get(this.apiURL);
  }
}
