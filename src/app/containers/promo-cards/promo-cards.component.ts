import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PromoCard } from '@models/promocard';
import { ProfileService } from '@services/profile.service';

@Component({
  selector: 'app-promo-codes',
  templateUrl: './promo-cards.component.html',
  styleUrls: ['./promo-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoCardsComponent implements OnInit {

	promoCards: PromoCard[] = [];

	constructor(
		private profileService: ProfileService
	) {}

	ngOnInit() {
		this.profileService.getUserPromoCards().subscribe(
			(response: PromoCard[]) => {
				this.promoCards = response;
			}
		)
	}
}
