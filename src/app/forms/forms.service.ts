import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }

  getForms(): Observable<FormMetaData[]> {
    return this.http.get<FormMetaData[]>('/assets/form-list.json').pipe(
      startWith([]),
      tap(x => console.log('data', x)),
    );
  }
}

export interface FormMetaData {
  id: number;
  name: string;
  version: number;
  isPublished: boolean;
  type: string;
}
