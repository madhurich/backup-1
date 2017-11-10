import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-output-test',
  template: `
    <h4>{{text}} - {{id}}</h4>
    <form>
      Name:
      <input #myInp type="text" [(ngModel)]="text" name="someName"/>
      <button (click)="update.emit({name:text})">change</button>
    </form>
  `,
  styles: []
})
export class OutputTestComponent implements OnInit {
  @Output() update = new EventEmitter();
  @Input() text;
  @Input() id;

  constructor() { }

  ngOnInit() {
  }

}
