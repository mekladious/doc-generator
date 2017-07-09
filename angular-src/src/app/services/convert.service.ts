import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ConvertService {

  constructor(private http: Http) { }

  convert(file) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({ responseType: ResponseContentType.Blob });
    return this.http.post('user/convert', file, options)
        .map(res => res.blob());

  }

  download() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get('user/download', { headers })
      .map(res => res.json());
      
  }

//   downloadFile(name): Observable<Blob> {
//     const options = new RequestOptions({ responseType: ResponseContentType.Blob });
//     return this.http.get('/Users/mekladious/ng2-admin/backend/public/archive/mira.zip', options)
//         .map(res => res.blob());
//   }

// downloadfile(runname: string) {
//   const headers = new Headers();
//   headers.append('responseType', 'arraybuffer');
//   return this.http.get("../../../public/archive/"+ runname + "/?file="+ 'application/zip')
//             .map(res => new Blob([res], { type: 'application/zip' }));
// }
}
