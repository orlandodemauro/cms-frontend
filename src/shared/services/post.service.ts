import { Injectable } from '@angular/core';

import { UtilsService } from './utils.service';

import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

constructor(
    private http: HttpClient,
    private utils: UtilsService,
  ) {

  }

  getPost(title: string): Promise<any> {
    return this.http.get(
                 this.utils.get_url(`blog/post/${title}`),
               )
               .toPromise()
               .then(response => response)
               .catch(this.utils.handleError);
  }

  getPosts(): Promise<any> {
    return this.http.get(
                 this.utils.get_url(`blog/post`),
               )
               .toPromise()
               .then(response => response)
               .catch(this.utils.handleError);
  }
}
