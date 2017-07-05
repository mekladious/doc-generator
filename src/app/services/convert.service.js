import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

export class ConvertService {

  constructor(http) { 

  }

  convert(file){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post('http://localhost:3000/user/convert', {headers: headers})
      .map(res => res.json())
  }

}