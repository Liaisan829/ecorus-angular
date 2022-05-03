import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Portal } from '@angular/cdk/portal';
import { CdkDialogContainer } from '@angular/cdk-experimental/dialog';

@Component({
	selector: 'app-modal-container',
	templateUrl: './modal-container.component.html',
	styleUrls: ['./modal-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContainerComponent extends CdkDialogContainer{
	portal?: Portal<any>;
	dialogTitle: string = "hello for now"
}
