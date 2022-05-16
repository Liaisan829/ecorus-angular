import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MapPageComponent } from '@pages/map-page/map-page.component';

@Component({
	selector: 'app-full-map-card',
	templateUrl: './full-map-card.component.html',
	styleUrls: ['./full-map-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullMapCardComponent {

	constructor(private map: MapPageComponent) {
	}

	@Input() collPoint$ = this.map.collPoints$;

	@Input() selected!: number;

	@Output() onChanged = new EventEmitter<number>();

	handleChange(n: number) {
		this.selected = n;
		this.onChanged.emit(n);
	}

}
