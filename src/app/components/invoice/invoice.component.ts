import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'invoice-component',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoices: any[] = [];
  loading: boolean = false;

  constructor(private invoiceService: InvoiceService) { }

  get_invoices_by_date_range() {
    console.log("Hello");
    const startDate = '2022-01-01';
    const endDate = '2022-01-04';
    this.loading = true;
    this.invoiceService.getInvoices(startDate, endDate)
      .subscribe(
        (response) => {
          this.invoices = response;
        },
        (error) => {
          console.error('Error fetching invoices:', error);
        }
      ).add(() => {
        this.loading = false;
      });
  }

}
