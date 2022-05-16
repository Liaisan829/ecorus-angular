import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { QrModalComponent } from '@components/modals/qr-modal/qr-modal.component';

@Component({
	selector: 'app-promocode-card',
	templateUrl: './promocode-card.component.html',
	styleUrls: ['./promocode-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromocodeCardComponent {

	constructor(private dialog: DialogService) {
	}

	openQrModal() {
		this.dialog.openDialog(QrModalComponent)
	}

}
