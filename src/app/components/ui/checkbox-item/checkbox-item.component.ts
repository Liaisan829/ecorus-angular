import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-checkbox-item',
	templateUrl: './checkbox-item.component.html',
	styleUrls: ['./checkbox-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxItemComponent {

	@Input() title: string = '';
	@Input() isChecked: boolean = false;
	@Input() checkHandler: any;
	@Input() index?: number;
}
