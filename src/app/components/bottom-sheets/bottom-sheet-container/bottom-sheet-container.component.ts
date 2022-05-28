import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CdkDialogContainer } from '@angular/cdk-experimental/dialog';
import { Portal } from '@angular/cdk/portal';

@Component({
  selector: 'app-bottom-sheet-container',
  templateUrl: './bottom-sheet-container.component.html',
  styleUrls: ['./bottom-sheet-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSheetContainerComponent extends CdkDialogContainer{
	portal?: Portal<any>;
}
