import { NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormDetailShellComponent } from './form-detail/form-detail-shell.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormsRoutingModule } from './forms-routing.module';
import { InputTableComponent } from './input-table/input-table.component';
import { ItemDetailShellComponent } from './item-detail/item-detail-shell.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';
import { NumericRangeComponent } from './numeric-range/numeric-range.component';
import { PageDetailShellComponent } from './page-detail/page-detail-shell.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { FormsEffects } from './state/forms.effects';
import { formsReducer } from './state/forms.reducer';
import { formsStateKey } from './state/forms.selectors';
import { OptionsEditorComponent } from './options-editor/options-editor.component';

@NgModule({
  declarations: [
    FormListComponent,
    FormDetailComponent,
    FormDetailShellComponent,
    PageDetailComponent,
    PageDetailShellComponent,
    ItemDetailComponent,
    ItemDetailShellComponent,
    NumericRangeComponent,
    InputTableComponent,
    RichTextEditorComponent,
    ItemEditorComponent,
    OptionsEditorComponent
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
    MatIconModule,
    MatButtonModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    MatDialogModule,
    CKEditorModule,
    StoreModule.forFeature(formsStateKey, formsReducer),
    EffectsModule.forFeature([FormsEffects]),
  ],
})
export class FormsModule { }
