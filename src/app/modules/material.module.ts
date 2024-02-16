import { NgModule } from "@angular/core";

import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
    imports: [
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule
    ],
    exports: [
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule
    ],
    providers: [provideNativeDateAdapter()],
})
export class MaterialModule { }