import { Injectable } from '@angular/core';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk-experimental/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { BottomSheetContainerComponent } from '@components/bottom-sheets/bottom-sheet-container/bottom-sheet-container.component';

@Injectable({
	providedIn: 'root'
})
export class BottomSheetService {

	constructor(private bottomSheet: Dialog) {
	}

	openDialog<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<BottomSheetContainerComponent> {
		this.bottomSheet.closeAll();
		return this.bottomSheet.openFromComponent(component, {
			maxWidth: 'none',
			...config,
			containerComponent: BottomSheetContainerComponent,
		});
	}

	closeDialog = () => {
		this.bottomSheet.closeAll()
	}
}
