import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NumericRangeComponent } from './numeric-range/numeric-range.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';

@NgModule({
  declarations: [
    NumericRangeComponent,
    RichTextEditorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    NumericRangeComponent,
    RichTextEditorComponent,
  ]
})
export class ControlsModule { }
