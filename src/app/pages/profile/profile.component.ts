import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { PromoService } from '@services/promo.service';
import { HistoryService } from '@services/history.service';
import { ProfileService } from '@services/profile.service';
import { User } from '@models/user';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

	history$ = this.historyService.history$
	user: User | null = null;

	constructor(
		private promoService: PromoService,
		private historyService: HistoryService,
		private profileService: ProfileService
	) {
	}

	ngOnInit() {
		this.profileService.getProfile().subscribe(
			(response: User) => {
				this.user = response;
			}
		)
	}
}
