import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDetailShellComponent } from './form-detail/form-detail-shell.component';
import { FormListComponent } from './form-list/form-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormListComponent },
  { path: 'form/:id', component: FormDetailShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
