import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitUsersService {
  url = 'https://api.github.com/users/';
  constructor(private _http:Http) { }

  getUsers(user){
    return this._http.get(this.url + user)
              .map(res => res.json());
  }

  getRepos(user){
    return this._http.get(this.url + user + '/repos')
              .map(res => res.json()); 
  }

  getFollowers(user){
    return this._http.get(this.url + user + '/followers')
              .map(res => res.json()); 
  }

}
