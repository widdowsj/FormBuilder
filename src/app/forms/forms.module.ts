import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormListComponent } from './form-list/form-list.component';
import { FormsRoutingModule } from './forms-routing.module';


@NgModule({
  declarations: [
    FormListComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MatTableModule,
  ]
})
export class FormsModule { }
