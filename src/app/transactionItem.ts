import { CurrencyPipe } from '@angular/common';

export class transactionItem{

  constructor(
    public id?:Number,
    public date?:Date,
    public desc?:string,
    public amount?:Number
  )
  {}
}