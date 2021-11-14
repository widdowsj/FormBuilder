import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, HostBinding, Input, OnDestroy, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { Subject } from 'rxjs';
import * as Editor from '../ckeditor/ckeditor';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: RichTextEditorComponent }]
})
export class RichTextEditorComponent implements OnInit, OnDestroy, MatFormFieldControl<string>, ControlValueAccessor {
  static nextId = 0;
  public Editor = Editor;
  editorConfig = {
    placeholder: 'Enter some text'
  };

  private _required = false;
  private _disabled = false;
  private _onChange: ((_: any) => void) | undefined = undefined;
  private _onTouched: any;

  data = '';

  stateChanges = new Subject<void>();
  focused = false;
  autofilled?: boolean | undefined;

  @ViewChild('editor') editorComponent: CKEditorComponent | undefined;
  @HostBinding() id = `app-rich-text-editor-${RichTextEditorComponent.nextId++}`;

  @Input()
  get value(): string {
    return this.data;
  }
  set value(contents: string) {
    this.data = contents;
  }

  @Input()
  get placeholder(): string {
    return this.editorConfig.placeholder;
  }
  set placeholder(plh: string) {
    this.editorConfig.placeholder = plh;
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(req: boolean) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  public get errorState(): boolean {
    return coerceBooleanProperty(this.ngControl?.touched) && coerceBooleanProperty(this.ngControl?.invalid);
  }

  get empty(): boolean {
    return !this.data;
  }

  get shouldLabelFloat(): boolean {
    return true;
  }

  // tslint:disable-next-line:no-input-rename
  @Input('aria-describedby') userAriaDescribedBy = '';

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    // const editor = this.editorComponent as any;
    // console.groupCollapsed('buttons');
    // Array.from(editor.ui.componentFactory.names()).map(plugin => console.log(plugin));
    // console.groupEnd();
    // console.log('defaultConfig', this.Editor.defaultConfig);
    // console.groupCollapsed('plugins');
    // this.Editor.builtinPlugins.map((plugin: { pluginName: string; }) => console.log(plugin.pluginName));
    // console.groupEnd();
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  // ControlValueAccessor
  writeValue(value: string): void {
    this.data = value;
    this.stateChanges.next();
  }
  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }

  setDescribedByIds(ids: string[]): void {
    // const controlElement = this._elementRef.nativeElement
    //   .querySelector('.example-tel-input-container')!;
    // controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  onContainerClick(event: MouseEvent): void {
  }

  onChange({ editor }: ChangeEvent): void {
    this.data = editor.getData();
    this.stateChanges.next();
    if (this._onChange) {
      this._onChange(this.data);
    }
  }

  onBlur(): void {
    this.focused = false;
    if (this._onTouched) {
      this._onTouched();
    }
    this.stateChanges.next();
  }

  onFocus(): void {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }
}
