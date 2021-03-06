import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { formFields, FormItem, ItemType, Page } from '../forms.entities';
import { saveItem } from '../state/forms.actions';
import { FormsFeature, getPageList } from '../state/forms.selectors';

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
  pageList$: Observable<Page[] | undefined>;
  ItemType = ItemType;

  constructor(fb: FormBuilder,
    public dialogRef: MatDialogRef<ItemEditorComponent>,
    @Inject(MAT_DIALOG_DATA) data: { item: FormItem },
    private store: Store<FormsFeature>) {

    this.pageList$ = store.select(getPageList);

    this.item = data.item;
    this.originalId = this.item.itemId;

    this.form = fb.group({
      id: [this.item.itemId, [Validators.required]],
      pageId: [this.item.pageId, [Validators.required]],
      description: [this.item.description, [Validators.required]],
      text: [this.item.text, [Validators.required]],
      questionType: [this.item.questionType],
      order: [this.item.order],
      options: [this.item.options],
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
