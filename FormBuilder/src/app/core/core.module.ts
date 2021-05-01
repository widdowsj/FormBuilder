import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    ShellComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ShellComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
