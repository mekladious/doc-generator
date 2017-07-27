import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WuzzufService {

    constructor(private http: Http) { }
    apps: File;

    upload(file) {
        this.apps = file;
        console.log(file);
    }

  
}
