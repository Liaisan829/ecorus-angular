import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-checkbox-item',
	templateUrl: './checkbox-item.component.html',
	styleUrls: ['./checkbox-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxItemComponent {

	@Input() title: string;
	@Input() isClicked: boolean;
	@Input() clickHandler: any;
	@Input() index?: number;

	constructor() {
		this.title = '';
		this.isClicked = false;
		this.clickHandler = '';
	}
}
