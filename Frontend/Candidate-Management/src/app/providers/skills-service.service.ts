import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsServiceService {

  constructor(private http: HttpClient) { }

  fetchSkills(){
    return this.http.get('/api/getSkillsList');
  }
}
