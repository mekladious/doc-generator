import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CompaniesService {

  constructor(private http: Http) { }

  getCompanies() {
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get('user/getCompanies', {headers: headers})
      .map(res => res.json())
  }
  addCompany(body) {
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post('user/addCompany', {data:body},{headers: headers})
      .map(res => res.json())
  }
  saveDraft(body) {
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post('user/save', {newDraft:body},{headers: headers})
      .map(res => res.json())
  }

}