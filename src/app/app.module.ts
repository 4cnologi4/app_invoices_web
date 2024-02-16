import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { InvoiceService } from './services/invoice.service';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceTableComponent } from './components/invoice-table/invoice-table.component';
import { InvoiceTableRowComponent } from './components/invoice-table-row/invoice-table-row.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        MaterialModule,
        FormsModule, ReactiveFormsModule,
        JsonPipe
    ],
    declarations: [
        AppComponent,
        InvoiceComponent,
        InvoiceTableComponent,
        InvoiceTableRowComponent
    ],
    providers: [InvoiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
