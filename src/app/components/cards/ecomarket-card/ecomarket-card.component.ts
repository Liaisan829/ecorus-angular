import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';
import { ProfileService } from '@services/profile.service';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';

@Component({
	selector: 'app-ecomarket-card',
	templateUrl: './ecomarket-card.component.html',
	styleUrls: ['./ecomarket-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketCardComponent {
	@Input() product$ = this.ecomarket.products$;
	user = this.authService.isAuthorized();

	constructor(
		private ecomarket: EcomarketComponent,
		private authService: AuthService
	) {
	}

}
