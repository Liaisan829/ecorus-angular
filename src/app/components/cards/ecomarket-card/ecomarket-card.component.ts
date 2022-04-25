import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';

@Component({
	selector: 'app-ecomarket-card',
	templateUrl: './ecomarket-card.component.html',
	styleUrls: ['./ecomarket-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketCardComponent implements OnInit {

	constructor(private ecomarket: EcomarketComponent) {
	}

	ngOnInit(): void {
	}

	@Input() product$ = this.ecomarket.products$;


}
