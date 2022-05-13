import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-slider-card',
	templateUrl: './slider-card.component.html',
	styleUrls: ['./slider-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderCardComponent {
	@Input() cardHeadline: string;
	@Input() cardText: string;
	@Input() img: string;
	@Input() buttonText: string;
	@Input() theme: 'light-green' | 'default' | 'yellow' = 'default';

	constructor() {
		this.cardHeadline = '';
		this.cardText = '';
		this.img = '';
		this.buttonText = '';
	}
}
