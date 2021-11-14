import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CheckboxListComponent } from './checkbox-list/checkbox-list.component';
import { NumericRangeComponent } from './numeric-range/numeric-range.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';

@NgModule({
  declarations: [
    NumericRangeComponent,
    RichTextEditorComponent,
    CheckboxListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  exports: [
    NumericRangeComponent,
    RichTextEditorComponent,
    CheckboxListComponent,
  ]
})
export class ControlsModule { }
