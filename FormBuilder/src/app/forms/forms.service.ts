import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormDetail, formFields, FormMetaData } from './forms.entities';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient, private router: Router) { }

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
}
