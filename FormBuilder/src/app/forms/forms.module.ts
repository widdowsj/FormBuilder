import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormDetailShellComponent } from './form-detail/form-detail-shell.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormsRoutingModule } from './forms-routing.module';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { FormsEffects } from './state/forms.effects';
import { formsReducer } from './state/forms.reducer';
import { formsStateKey } from './state/forms.selectors';

@NgModule({
  declarations: [
    FormListComponent,
    FormDetailComponent,
    FormDetailShellComponent,
    PageDetailComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    StoreModule.forFeature(formsStateKey, formsReducer),
    EffectsModule.forFeature([FormsEffects]),
  ]
})
export class FormsModule { }
