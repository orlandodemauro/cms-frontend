import { Injectable } from '@angular/core';

import { UtilsService } from './utils.service';

import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlogService {

constructor(
    private http: HttpClient,
    private utils: UtilsService,
  ) {

  }

  getBlog(name: string): Promise<any> {
    return this.http.get(
                 this.utils.get_url(`blog/${name}`),
               )
               .toPromise()
               .then(response => response)
               .catch(this.utils.handleError);
  }

  getBlogs(): Promise<any> {
    return this.http.get(
                 this.utils.get_url(`blog`),
               )
               .toPromise()
               .then(response => response)
               .catch(this.utils.handleError);
  }
}
