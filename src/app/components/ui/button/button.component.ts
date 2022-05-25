import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
	@Input() type: 'submit' | 'button' | 'reset' = 'button';
	@Input() theme: 'GREEN' | 'GREY' | 'DEFAULT' | 'ECO' | 'FILTER' = 'GREEN';
	@Input() color?: string
	@Input() wide: boolean = false;
	@Output() submit = new EventEmitter();
}

