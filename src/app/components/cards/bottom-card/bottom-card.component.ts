import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-card',
  templateUrl: './bottom-card.component.html',
  styleUrls: ['./bottom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomCardComponent implements OnInit {

  constructor() {
	  this.cardHeadline = '';
	  this.cardText = '';
	  this.img = '';
  }

  ngOnInit(): void {
  }

  @Input() cardHeadline: string;
  @Input() cardText: string;
  @Input() img: string;

}
