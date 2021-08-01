import { Component, Input, OnInit } from '@angular/core';
import * as Editor from '../ckeditor/ckeditor';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent implements OnInit {
  public Editor = Editor;
  editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'fontFamily',
        'fontSize',
        '|',
        'fontColor',
        'fontBackgroundColor',
        'highlight',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'removeFormat',
        'horizontalLine',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'alignment',
        'outdent',
        'indent',
        '|',
        'link',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo'
      ]
    },
    language: 'en-au',
  };

  @Input() labelText = '';
  @Input() data = '';

  constructor() {

  }

  ngOnInit(): void {
  }

}
