import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { QrModalComponent } from '@components/modals/qr-modal/qr-modal.component';
import { DialogService } from '@services/dialog.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-promo-card',
	templateUrl: './promo-card.component.html',
	styleUrls: ['./promo-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoCardComponent {
	@Input() getting_date_time: string = '2022-05-12T12:30:49.702Z';
	@Input() item_url: string = 'adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...';
	@Input() price: number = 1000;

	constructor(
		private sanitizer: DomSanitizer,
		private dialog: DialogService,
	) {
		sanitizer.bypassSecurityTrustHtml(this.item_url)
	}

	openQrModal() {
		this.dialog.openDialog(QrModalComponent)
	}
}
