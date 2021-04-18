import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    ShellComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ShellComponent,
  ]
})
export class CoreModule { }
