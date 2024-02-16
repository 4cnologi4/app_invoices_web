import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-table-row',
  templateUrl: './invoice-table-row.component.html',
  styleUrls: ['./invoice-table-row.component.css']
})
export class InvoiceTableRowComponent {
  @Input() invoice: any | undefined;
}
