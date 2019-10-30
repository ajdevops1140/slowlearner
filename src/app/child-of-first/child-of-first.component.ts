import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Thing } from '../thing';

@Component({
  selector: 'app-child-of-first',
  templateUrl: './child-of-first.component.html',
  styleUrls: ['./child-of-first.component.css']
})
export class ChildOfFirstComponent{
  @Input() something:string;
  @Output() someItem = new EventEmitter<string>();

  sendItem(value:string){
    this.someItem.emit(value);
  }
  
}