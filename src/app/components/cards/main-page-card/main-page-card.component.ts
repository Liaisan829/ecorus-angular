import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-main-page-card',
	templateUrl: './main-page-card.component.html',
	styleUrls: ['./main-page-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageCardComponent {

	@Input() title: string
	@Input() text: string
	@Input() bgImg: string

	constructor() {
		this.title = '';
		this.text = '';
		this.bgImg = '';
	}
}
