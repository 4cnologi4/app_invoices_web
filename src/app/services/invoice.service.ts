import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl = 'http://127.0.0.1:8080/api/invoices';

  constructor(private http: HttpClient) { }

  getInvoices(startDate: string, endDate: string): Observable<any[]> {
    const payload = { start_date: startDate, end_date: endDate };
    return this.http.post<any[]>(this.apiUrl, payload);
  }
}
