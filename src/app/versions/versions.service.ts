import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VersionsService {

  private url: string = "http://phgames.app/api/versions";

  constructor(private http: Http) {

  }

  getVersions(){
      return this.http.get(this.url)
          .map(res => res.json());
  }
}
