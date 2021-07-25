import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string | null, order: number }) { }

  ngOnInit(): void {
  }

}
