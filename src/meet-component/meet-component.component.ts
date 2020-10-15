import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-component',
  templateUrl: './meet-component.component.html',
  styleUrls: ['./meet-component.component.scss']
})
export class MeetComponentComponent implements OnInit {
  @Input() prop: any;
  //constructor() { }

  //foo;
  ngOnInit(): void {
    // this.foo = this.prop;
  }

}
