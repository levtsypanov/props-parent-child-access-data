/**test.component.ts */
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-test",
  template: `
    <h2>{{ "Hello " + parentData }}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  @Input() parentData; //receive props from parent
  // @Input("parentData") name; //using alias

  @Output() childEvent = new EventEmitter(); //send props to parent via event

  constructor() {}

  ngOnInit(): void {}

  fireEvent() {
    this.childEvent.emit("Hey Codevolution");
  }
}
