import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlOption } from '../controls.entities';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxListComponent,
      multi: true
    }]
})
export class CheckboxListComponent implements OnInit, ControlValueAccessor {
  @Input() labelText = '';
  changeSubscription: any;
  @Input()
  get options(): ControlOption[] {
    return this.controlOptions;
  }
  set options(val: ControlOption[]) {
    this.controlOptions = val.map((x, i) => ({ ...x, control: new FormControl(), order: i }));
    this.controlOptions.forEach(controlOption => {
      controlOption.control.valueChanges.subscribe(x => console.log(controlOption, x));
    });
  }
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }

  controlOptions: EditableFormOption[] = [];
  value: string[] = [];

  private _disabled = false;
  private onTouched: any;
  private onChange: ((_: any) => void) = () => { };

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    if (obj === null) {
      this.value = [];
    }
    else {
      this.value = obj;
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}

export interface EditableFormOption extends ControlOption {
  control: FormControl;
}
