import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'invoice-component',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoices: any[] = [];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.get_invoices_by_date_range()
  }

  get_invoices_by_date_range() {
    const startDate = '2022-01-01';
    const endDate = '2022-01-04';
    this.invoiceService.getInvoices(startDate, endDate)
      .subscribe(
        (response) => {
          this.invoices = response;
        },
        (error) => {
          console.error('Error fetching invoices:', error);
        }
      );
  }
}
