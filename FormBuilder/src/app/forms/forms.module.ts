import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormsRoutingModule } from './forms-routing.module';
import { PageDetailComponent } from './page-detail/page-detail.component';

@NgModule({
  declarations: [
    FormListComponent,
    FormDetailComponent,
    PageDetailComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MatTableModule,
    MatStepperModule,
  ]
})
export class FormsModule { }
