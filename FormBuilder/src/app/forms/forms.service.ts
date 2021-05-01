import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { FormDetail } from './forms.entities';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient, private router: Router) { }

  getForms(): Observable<FormMetaData[]> {
    return this.http.get<FormMetaData[]>('/assets/form-list.json').pipe(
      startWith([]),
    );
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
    return this.http.get<FormDetail>(`/assets/${formName}`)
  }
}

export interface FormMetaData {
  id: number;
  name: string;
  version: number;
  isPublished: boolean;
  type: string;
}
