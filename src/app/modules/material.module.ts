import { NgModule } from "@angular/core";

import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
    imports: [
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    providers: [provideNativeDateAdapter()],
})
export class MaterialModule { }