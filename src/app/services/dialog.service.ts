import { Injectable } from '@angular/core';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk-experimental/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { ModalContainerComponent } from '@components/modals/modal-container/modal-container.component';

@Injectable({
	providedIn: 'root'
})

export class DialogService {

	constructor(private dialog: Dialog) {
	}

	openDialog<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
		this.dialog.closeAll();
		return this.dialog.openFromComponent(component, {
			maxWidth: 'none',
			...config,
			containerComponent: ModalContainerComponent,
		});
	}
}
