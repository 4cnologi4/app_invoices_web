import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css'],
  providers: [provideNativeDateAdapter()],
})

export class InvoiceTableComponent implements OnChanges {
  @Input() invoices: any[] = [];
  displayedColumns: string[] = ['ID', 'Date', 'Invoice Number', 'Status', 'Total'];
  dataSource = new MatTableDataSource<any>(this.invoices);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['invoices'] && changes['invoices'].currentValue) {
      this.dataSource.data = changes['invoices'].currentValue;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
    
}
