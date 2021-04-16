import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private _http: HttpClient) { }

  sendMessage(message){
    return this._http.post(`${environment.contactUsUrl}/contact_us`,message)
  }
}
