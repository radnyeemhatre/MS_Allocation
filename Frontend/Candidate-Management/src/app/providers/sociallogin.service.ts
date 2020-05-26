import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginUser} from '../models/LoginUser'
@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
url;
  constructor(private http: HttpClient) { }
  Savesresponse(responce)
  {
    let loginUser=new LoginUser(responce.email,responce.token)
    console.log("service");
    this.url =  '/api/login';
    return this.http.post(this.url,loginUser);
  }
}