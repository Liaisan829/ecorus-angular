import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProfileComponent } from '@pages/profile/profile.component';

@Component({
	selector: 'app-promo-card',
	templateUrl: './promo-card.component.html',
	styleUrls: ['./promo-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoCardComponent implements OnInit {

	constructor(private profile: ProfileComponent) {
	}

	ngOnInit(): void {
	}

	@Input() promo$ = this.profile.promo$;

}
