import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
