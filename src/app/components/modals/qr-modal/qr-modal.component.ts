import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-qr-modal',
	templateUrl: './qr-modal.component.html',
	styleUrls: ['./qr-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrModalComponent {
	constructor() {
	}

}
