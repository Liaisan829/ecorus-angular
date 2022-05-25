import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { QrModalComponent } from '@components/modals/qr-modal/qr-modal.component';
import { ProfileService } from '@services/profile.service';

@Component({
	selector: 'app-promocode-card',
	templateUrl: './eco-promo-card.component.html',
	styleUrls: ['./eco-promo-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcoPromoCardComponent implements OnInit {
	balance: number = 0;

	constructor(
		private dialog: DialogService,
		private profileService: ProfileService,
		private cdr: ChangeDetectorRef
	) {
	}

	openQrModal() {
		this.dialog.openDialog(QrModalComponent)
	}

	ngOnInit() {
		this.profileService.getUserBalance().subscribe(
			(response: number) => {
				this.balance = response;
				this.cdr.markForCheck();
			}
		)
	}

}
