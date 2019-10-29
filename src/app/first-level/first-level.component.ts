import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-level',
  templateUrl: './first-level.component.html',
  styleUrls: ['./first-level.component.css']
})
export class FirstLevelComponent implements OnInit {
  whereImAt:string = "I'm alright!";
  someStuff = ['This thing','and this thing','and THIS THING!'];

  constructor() { }

  ngOnInit() {
  }

}