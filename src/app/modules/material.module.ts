import { NgModule } from "@angular/core";

import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";


import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
    imports: [
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatButtonModule,
        
    ],
    exports: [
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    providers: [provideNativeDateAdapter()],
})
export class MaterialModule { }