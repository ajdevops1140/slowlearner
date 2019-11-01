import { Component, OnInit } from "@angular/core";
import { transactionItem } from "../transactionItem";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-transaction-entry-form",
  templateUrl: "./transaction-entry-form.component.html",
  styleUrls: ["./transaction-entry-form.component.css"]
})
export class TransactionEntryFormComponent implements OnInit {
  transModel: transactionItem;

  date1: string;

  constructor() {}

  ngOnInit() {
    this.transModel = new transactionItem(
      -1,
      new Date().toISOString().substring(0, 10)
    );

    //this.date1 = d;//.toLocaleString('en-US', { year:'numeric',month:'2-digit', day:'2-digit', });
  }

  get diagnostic() {
    return JSON.stringify(this.transModel);
  }

  addTransaction(formVar:any)
  {
    //formVar.reset();
    this.transModel = new transactionItem(0,new Date().toISOString().substring(0, 10),'After Submit');
  }
}
