import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PromoService } from '@services/promo.service';
import { HistoryService } from '@services/history.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

	promo$ = this.promoService.promo$
	history$ = this.historyService.history$

	constructor(
		private promoService: PromoService,
		private historyService: HistoryService
	) {
	}

	ngOnInit(): void {
	}

}
