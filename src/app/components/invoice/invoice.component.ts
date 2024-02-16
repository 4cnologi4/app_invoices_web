import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'invoice-component',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoices: any[] = [];
  loading: boolean = false;
  form: FormGroup;
  
  constructor(private fb: FormBuilder, private invoiceService: InvoiceService) {
    this.form = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    }, { validators: this.dateRangeValidator });
  }

  dateRangeValidator(form: FormGroup) {
    const startDate = form.get('startDate')?.value;
    const endDate = form.get('endDate')?.value;
    return startDate && endDate && startDate > endDate ? { 'invalidRange': true } : null;
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      const startDate = this.form.get('startDate')?.value;
      const endDate = this.form.get('endDate')?.value;
      this.invoiceService.getInvoices(startDate, endDate)
        .subscribe(
          (response) => {
            this.invoices = response;
          },
          (error) => {
            console.error('Error fetching invoices:', error);
          }
        )
        .add(() => {
          this.loading = false;
        });
    }
  }
}
