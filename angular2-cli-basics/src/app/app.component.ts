import { Component, OnInit, Inject } from '@angular/core';
import {EmailService} from './email.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'hi mad!';
  nameHere;
  message;
  checkEmail;
  allMails;

  onUpdate(id, text){
    this.email.update(id, text);
    console.log(event);
  }

  constructor(@Inject('email') private email,
   @Inject('name') private name){

  }

  ngOnInit(){
    this.checkEmail = (mail) => {
      if(mail.value == 'no'){
        this.message = this.email.myMail;
      }
    }

    //this.allMails = this.email.allMails;

    this.nameHere = this.name;

  }
}
