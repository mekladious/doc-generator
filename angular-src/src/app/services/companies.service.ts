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

}