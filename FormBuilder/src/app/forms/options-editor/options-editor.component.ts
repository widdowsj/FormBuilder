import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { FormOption } from '../forms.entities';

@Component({
  selector: 'app-options-editor',
  templateUrl: './options-editor.component.html',
  styleUrls: ['./options-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OptionsEditorComponent),
      multi: true
    }]
})
export class OptionsEditorComponent implements OnInit, ControlValueAccessor {
  optionColumns = ['value', 'text', 'editButtons'];

  options: EditableFormOption[] = [];

  private onChange: ((_: any) => void) = () => { };
  private onTouched: any;

  constructor() { }

  @Input()
  get value(): FormOption[] {
    return this.options;
  }
  set value(val: FormOption[]) {
    this.options = val.map(x => ({ ...x, id: uuidv4() }));
    this.onChange(val);
  }

  writeValue(obj: FormOption[]): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  valueChange(id: string, eventTarget: EventTarget | null): void {
    const target = (eventTarget as HTMLInputElement);
    this.value = this.options.map(x => {
      if (x.id === id) {
        x.value = target.value;
      }
      return x;
    });
  }

  textChange(id: string, eventTarget: EventTarget | null): void {
    const target = (eventTarget as HTMLInputElement);
    this.value = this.options.map(x => {
      if (x.id === id) {
        x.text = target.value;
      }
      return x;
    });
  }

  deleteItem(value: string): void {
    this.value = this.options.filter(x => x.value !== value);
  }
}

export interface EditableFormOption extends FormOption {
  id: string;
}
