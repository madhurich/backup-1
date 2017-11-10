import { Component, OnInit, Inject } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-git-users-followers',
  templateUrl: './git-users-followers.component.html',
  styleUrls: ['./git-users-followers.component.css']
})
export class GitUsersFollowersComponent implements OnInit {
  
  onSubmit;
  user;
  constructor(@Inject('gitUsers') private gitUsers) { }
  callObservable(f){
       Observable
        .forkJoin(this.gitUsers.getUsers(f.controls.inputUser.value),
                  this.gitUsers.getRepos(f.controls.inputUser.value),
                  this.gitUsers.getFollowers(f.controls.inputUser.value))
        .map((joined) => new Object({
          user: joined[0],
          repos: joined[1],
          followers:joined[2]
        }))
        .subscribe((res) => {
          console.log(res);
          this.user = res;
        })   
  }
  
  ngOnInit() {
      this.onSubmit = (f) => {
      console.log(f);
      this.callObservable(f);    
      // this.gitUsers.getUsers(f.controls.inputUser.value)
      //               .subscribe((user) => {
      //                 console.log(user);
      //                 this.user = user;
      //               });
      // this.gitUsers.getRepos(f.controls.inputUser.value)
      //               .subscribe((repos) => {
      //                 console.log(repos);
      //                 this.repos = repos;
      //               });                    
    }
    

  }

 

}
