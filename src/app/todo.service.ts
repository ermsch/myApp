import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(){
    this.http.get('https://dummy.restapiexample.com/api/v1/employees').subscribe()
  }
}
