import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-numeric-range',
  templateUrl: './numeric-range.component.html',
  styleUrls: ['./numeric-range.component.scss']
})
export class NumericRangeComponent implements OnInit {
  @Input() labelText = '';

  fromControl = new FormControl();
  toControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
