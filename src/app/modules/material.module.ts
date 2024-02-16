import { NgModule } from "@angular/core";

import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';


import { provideNativeDateAdapter } from '@angular/material/core';
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
    imports: [
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatPaginatorModule
    ],
    exports: [
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatPaginatorModule
    ],
    providers: [provideNativeDateAdapter()],
})
export class MaterialModule { }