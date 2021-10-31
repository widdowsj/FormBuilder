import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageDetailComponent implements OnInit {
  @Input() pageItems: string[] | undefined;
  @Input() editMode: boolean | null = null;

  @Output() addItemEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addItemClicked(order: number): void {
    this.addItemEvent.emit(order);
  }
}
