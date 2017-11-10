import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {
  myMail = 'you got an email mad';
  allMails = [
    {id: 0, text:'mad'},
    {id: 1, text:'man'},
    {id: 2, text:'dad'},
    {id: 3, text:'mom'}];

   update(id, text){
     this.allMails[id].text = text;

   }

  constructor() { }

}
