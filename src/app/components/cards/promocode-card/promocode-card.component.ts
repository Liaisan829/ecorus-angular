import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { QrModalComponent } from '@components/modals/qr-modal/qr-modal.component';
import { ProfileService } from '@services/profile.service';

@Component({
	selector: 'app-promocode-card',
	templateUrl: './promocode-card.component.html',
	styleUrls: ['./promocode-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromocodeCardComponent implements OnInit {
	balance: number = 0;

	constructor(
		private dialog: DialogService,
		private profileService: ProfileService
	) {
	}

	openQrModal() {
		this.dialog.openDialog(QrModalComponent)
	}

	ngOnInit() {
		this.profileService.getUserBalance().subscribe(
			(response: number) => {
				this.balance = response;
				console.log(this.balance);
			}
		)
	}

}
