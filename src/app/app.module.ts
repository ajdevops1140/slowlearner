import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstLevelComponent } from './first-level/first-level.component';
import { ChildOfFirstComponent } from './child-of-first/child-of-first.component';
import { InputTransactionComponent } from './input-transaction/input-transaction.component';
import { TransactionEntryFormComponent } from './transaction-entry-form/transaction-entry-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FirstLevelComponent, ChildOfFirstComponent, InputTransactionComponent, TransactionEntryFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
