import { Component, OnInit, Input  } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Thing } from '../thing';

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