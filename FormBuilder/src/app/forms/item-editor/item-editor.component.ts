import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { formFields, FormItem, ItemType } from '../forms.entities';
import { saveItem } from '../state/forms.actions';
import { FormsFeature } from '../state/forms.selectors';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {
  questionTypes = Object.values(ItemType).sort();
  item: FormItem;
  originalId: string;
  form: FormGroup;

  constructor(fb: FormBuilder,
    public dialogRef: MatDialogRef<ItemEditorComponent>,
    @Inject(MAT_DIALOG_DATA) data: { item: FormItem },
    private store: Store<FormsFeature>) {
    this.item = data.item;
    this.originalId = this.item.itemId;

    this.form = fb.group({
      id: [this.item.itemId, [Validators.required]],
      pageId: [this.item.pageId, [Validators.required]],
      description: [this.item.description, [Validators.required]],
      questionType: [this.item.questionType],
      order: [this.item.order],
    });
  }

  ngOnInit(): void {
  }

  save(): void {
    if (this.form.valid) {
      const item = this.form.value;
      item.isFormField = formFields.find(x => x === item.questionType) !== undefined;
      this.store.dispatch(saveItem({ itemId: this.originalId, item: { ...this.item, ...item } }));
      this.dialogRef.close();
    }
  }
}
