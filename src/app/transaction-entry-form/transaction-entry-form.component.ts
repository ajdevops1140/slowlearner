import { Component, OnInit } from '@angular/core';
import { transactionItem } from '../transactionItem';

@Component({
  selector: 'app-transaction-entry-form',
  templateUrl: './transaction-entry-form.component.html',
  styleUrls: ['./transaction-entry-form.component.css']
})
export class TransactionEntryFormComponent implements OnInit {
  transModel:transactionItem = new transactionItem();
 
  constructor() { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.transModel); }

}