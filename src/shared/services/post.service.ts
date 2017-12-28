import { Injectable } from '@angular/core';

import { UtilsService } from './utils.service';

import { Post } from '../interfaces/post';

import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

constructor(
    private http: HttpClient,
    private utils: UtilsService,
  ) {

  }

  getPost(title: string): Promise<Post> {
    return this.http.get(
                 this.utils.get_url(`blog/post/${title}`),
               )
               .toPromise()
               .then((response:any) => response.data as Post)
               .catch(this.utils.handleError);
  }

}
