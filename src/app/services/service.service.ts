import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get(environment.url);
  }

  getPage(params){
    return this._http.get(environment.url+`?page=${params}`);
  }

  getProductByID(id: String) {
    return this._http.get(`${environment.url}/${id}`)
  }
}
