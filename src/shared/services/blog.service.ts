import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

import { UtilsService } from './utils.service';
import { Post } from '../interfaces/post';

@Injectable()
export class BlogService {

constructor(
    private http: HttpClient,
    private utils: UtilsService,
  ) {

  }

  getPostsByBlog(name: string = ""): Promise<any> {
    return this.http.get(
                 this.utils.get_url(`blog/${name}`),
               )
               .toPromise()
               .then((response: any) => response.data.results as Post[])
               .catch(this.utils.handleError);
  }

  getBlogList(): Promise<any> {
    return this.http.get(
                 this.utils.get_url(`list/blog`),
               )
               .toPromise()
               .then((response: any) => response.data)
               .catch(this.utils.handleError);
  }
}
