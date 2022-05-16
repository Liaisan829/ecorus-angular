import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PromoService } from '@services/promo.service';
import { HistoryService } from '@services/history.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent{

	promo$ = this.promoService.promo$
	history$ = this.historyService.history$

	constructor(
		private promoService: PromoService,
		private historyService: HistoryService
	) {}
}
