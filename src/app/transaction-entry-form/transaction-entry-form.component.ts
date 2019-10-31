import { Component, OnInit } from '@angular/core';
import { transactionItem } from '../transactionItem';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction-entry-form',
  templateUrl: './transaction-entry-form.component.html',
  styleUrls: ['./transaction-entry-form.component.css']
})
export class TransactionEntryFormComponent implements OnInit {
  transModel:transactionItem = new transactionItem();
 
  date1:string;

  constructor() { }

  ngOnInit() {
    let nD:Date = new Date();    
    let d = nD.toISOString().substring(0,10);

    this.date1 = d;//.toLocaleString('en-US', { year:'numeric',month:'2-digit', day:'2-digit', });
  }

  get diagnostic() { return JSON.stringify(this.transModel); }

}