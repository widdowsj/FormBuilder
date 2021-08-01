import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormDetail, formFields, FormItem, FormMetaData } from './forms.entities';
import { ItemEditorComponent } from './item-editor/item-editor.component';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) { }

  getForms(): Observable<FormMetaData[]> {
    return this.http.get<FormMetaData[]>('/assets/form-list.json');
  }

  getFormDetail(id: string): Observable<FormDetail> {
    let formName = '';
    switch (id) {
      case '1':
        formName = 'karls building blocks.json';
        break;
      case '2':
        formName = 'application to become an employer.json';
        break;
      default:
        this.router.navigate(['/not-found'], { skipLocationChange: true });
    }
    return this.http.get<FormDetail>(`/assets/${formName}`).pipe(map(x => {
      x.itemList.map(item => {
        item.isFormField = formFields.includes(item.questionType);
      });
      return x;
    }));
  }

  showItemDialog(item: FormItem | undefined): Observable<void> {
    this.dialog.open(ItemEditorComponent, {
      data: { item }
    });
    return of();
  }
}
