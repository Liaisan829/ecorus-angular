import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet-container',
  templateUrl: './bottom-sheet-container.component.html',
  styleUrls: ['./bottom-sheet-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSheetContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
