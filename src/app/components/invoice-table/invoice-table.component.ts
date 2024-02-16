import { Component, Input } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css'],
  providers: [provideNativeDateAdapter()],
})

export class InvoiceTableComponent {
  @Input() invoices: any[] = [];
  displayedColumns: string[] = ['ID', 'Date', 'Invoice Number', 'Status', 'Total'];  
}
