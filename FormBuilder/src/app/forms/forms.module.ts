import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
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
    PageDetailComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MatTableModule,
    MatStepperModule,
    StoreModule.forFeature(formsStateKey, formsReducer),
    EffectsModule.forFeature([FormsEffects]),
  ]
})
export class FormsModule { }
