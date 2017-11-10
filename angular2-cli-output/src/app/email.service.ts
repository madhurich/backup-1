import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {
  mails =  [
      {id: 0, name:'mad'},
      {id: 1, name:'man'},
      {id: 2, name:'dad'},
      {id: 3, name:'mom'}
      ];;
  constructor() {
    
   }
  allMails(){
    return this.mails;
  }
  update(id, text){
    //alert('update');
    console.log(id, text);
    this.mails[id].name = text;
    console.log(this.mails);
    //this.allMails();
  }

}
