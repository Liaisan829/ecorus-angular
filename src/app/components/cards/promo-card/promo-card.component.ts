import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProfileComponent } from '@pages/profile/profile.component';
import { QrModalComponent } from '@components/modals/qr-modal/qr-modal.component';
import { DialogService } from '@services/dialog.service';

@Component({
	selector: 'app-promo-card',
	templateUrl: './promo-card.component.html',
	styleUrls: ['./promo-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoCardComponent implements OnInit {

	constructor(
		private profile: ProfileComponent,
		private dialog: DialogService
	) {
	}

	ngOnInit(): void {
	}

	@Input() promo$ = this.profile.promo$;

	openQrModal() {
		this.dialog.openDialog(QrModalComponent)
	}

}
