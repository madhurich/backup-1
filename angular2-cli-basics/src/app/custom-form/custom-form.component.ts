import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <form>
      {{email}}
      <input type="text" #randomInp [(ngModel)]="email" name="someName">
      <button (click)="update.emit({text: email})">submit</button>
    </form>
    <div [ngClass]={someClass:addColor}>
      some text some text some text some text some text some text some text
    </div>
    <button (click)="addColor = !addColor">Toggle</button>
    <p>madhuri</p>
  `,
  styles: [`
    .someClass{
      color: pink;
    }
    p{
      color: red;
    }
  `]
})
export class CustomFormComponent implements OnInit {
  addColor = false;

  @Output() update = new EventEmitter();
  @Input() email;

  // onSubmit(event, input){
  //   console.log(input.value);
  //   console.log(event);
  // }
  constructor() { }

  ngOnInit() {
  }

}
