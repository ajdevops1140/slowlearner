import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-of-first',
  templateUrl: './child-of-first.component.html',
  styleUrls: ['./child-of-first.component.css']
})
export class ChildOfFirstComponent implements OnInit {
  @Input() something:string;

  constructor() { }

  ngOnInit() {
  }

}