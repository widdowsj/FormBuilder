import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormDetailShellComponent } from './form-detail/form-detail-shell.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormsRoutingModule } from './forms-routing.module';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { FormsEffects } from './state/forms.effects';
import { formsReducer } from './state/forms.reducer';
import { formsStateKey } from './state/forms.selectors';

@NgModule({
  declarations: [
    FormListComponent,
    FormDetailComponent,
    FormDetailShellComponent,
    PageDetailComponent,
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    StoreModule.forFeature(formsStateKey, formsReducer),
    EffectsModule.forFeature([FormsEffects]),
  ]
})
export class FormsModule { }
