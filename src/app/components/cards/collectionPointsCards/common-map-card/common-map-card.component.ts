import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MapPageComponent } from '@pages/map-page/map-page.component';

@Component({
	selector: 'app-common-map-card',
	templateUrl: './common-map-card.component.html',
	styleUrls: ['./common-map-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonMapCardComponent implements OnInit {

	constructor(private map: MapPageComponent) {
	}

	ngOnInit(): void {
	}

	@Input() collPoint$ = this.map.collPoints$;
	@Input() selected!: number;

	@Output() onChanged = new EventEmitter<number>();

	handleChange(n: number) {
		this.selected = n;
		this.onChanged.emit(n);
	}

}
