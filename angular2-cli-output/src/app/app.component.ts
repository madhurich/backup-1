import { Component, OnInit, Inject } from '@angular/core';
import {OutputTestComponent} from './output-test/output-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  onUpdate;
  mails;
  constructor(@Inject('email') private email){
    
  }
   ngOnInit(){
     this.mails = this.email.allMails();
     this.onUpdate = (id, event) => {
       console.log(id, event);
        this.email.update(id, event.name);
        this.mails = this.email.allMails();
     }

   }
}
