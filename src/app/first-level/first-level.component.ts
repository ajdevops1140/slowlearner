import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-level',
  templateUrl: './first-level.component.html',
  styleUrls: ['./first-level.component.css']
})
export class FirstLevelComponent implements OnInit {
  whereImAt:string = "";

  constructor() { }

  ngOnInit() {
  }

}