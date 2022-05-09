import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Portal } from '@angular/cdk/portal';
import { CdkDialogContainer } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';

@Component({
	selector: 'app-modal-container',
	templateUrl: './modal-container.component.html',
	styleUrls: ['./modal-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContainerComponent extends CdkDialogContainer {
	portal?: Portal<any>;
	// TODO как то нормально получать название
	modalTitle: any = 'hello for now'
}
