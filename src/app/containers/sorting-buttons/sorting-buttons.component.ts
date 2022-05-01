import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sorting-buttons',
  templateUrl: './sorting-buttons.component.html',
  styleUrls: ['./sorting-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
