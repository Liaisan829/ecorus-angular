import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderCardComponent implements OnInit {

  constructor() {
	  this.cardHeadline = '';
	  this.cardText = '';
	  this.img = '';
	  this.buttonText = '';
	  this.bgColor = '';
  }

  ngOnInit(): void {
  }

  @Input() cardHeadline: string;
  @Input() cardText: string;
  @Input() img: string;
  @Input() buttonText: string;
  @Input() bgColor: string;
}
