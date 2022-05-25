import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-main-page-card',
	templateUrl: './main-page-card.component.html',
	styleUrls: ['./main-page-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageCardComponent {
	@Input() cardHeadline: string;
	@Input() cardText: string;
	@Input() img: string;

	constructor() {
		this.cardHeadline = '';
		this.cardText = '';
		this.img = '';
	}
}
