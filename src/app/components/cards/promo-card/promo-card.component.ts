import { Component, ChangeDetectionStrategy, Input} from '@angular/core';
import { ProfileComponent } from '@pages/profile/profile.component';
import { QrModalComponent } from '@components/modals/qr-modal/qr-modal.component';
import { DialogService } from '@services/dialog.service';

@Component({
	selector: 'app-promo-card',
	templateUrl: './promo-card.component.html',
	styleUrls: ['./promo-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoCardComponent{
	@Input() promo$ = this.profile.promo$;

	constructor(
		private profile: ProfileComponent,
		private dialog: DialogService,
	) {}

	openQrModal() {
		this.dialog.openDialog(QrModalComponent)
	}
}
