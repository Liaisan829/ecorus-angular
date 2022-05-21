import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { PromoCard } from '@models/promocard';
import { ProfileService } from '@services/profile.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-promo-codes',
	templateUrl: './profile-promo-cards.component.html',
	styleUrls: ['./profile-promo-cards.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePromoCardsComponent implements OnInit, OnDestroy {
	promoCards: PromoCard[] = [];
	destroy$ = new Subject();

	constructor(
		private profileService: ProfileService
	) {
	}

	ngOnInit() {
		this.profileService.getUserPromoCards()
			.pipe(takeUntil(this.destroy$))
			.subscribe(
				(response: PromoCard[]) => {
					this.promoCards = response;
				}
			)
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
