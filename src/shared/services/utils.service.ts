import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()

export class UtilsService {

  
  constructor(private http: HttpClient) {
  }

  get_url(path) {
    return `${environment.base_url}/${path}`;
  }

  setHttpParams(paramsObject): HttpParams {
    var params = new HttpParams();
    for (var p in paramsObject) {
      params = params.append(p, paramsObject[p]);
    }
    return params;
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', JSON.parse(error._body)); // for demo purposes only
    return Promise.reject(JSON.parse(error._body).errors);
  }  

}
