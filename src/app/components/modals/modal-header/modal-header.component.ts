import { Component, ChangeDetectionStrategy, Optional, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk-experimental/dialog';

interface DialogData {
	title: string;
}

@Component({
	selector: 'app-modal-header',
	templateUrl: './modal-header.component.html',
	styleUrls: ['./modal-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalHeaderComponent {

	constructor(
		@Optional() @Inject(DIALOG_DATA) public data: DialogData,
	) {
	}

}
