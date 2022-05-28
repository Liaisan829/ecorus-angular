import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BottomSheetService } from '@services/bottom-sheet.service';

@Component({
	selector: 'app-bottom-sheet-header',
	templateUrl: './bottom-sheet-header.component.html',
	styleUrls: ['./bottom-sheet-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSheetHeaderComponent {
	constructor(private bottomSheet: BottomSheetService) {
	}

	closeBottomSheet() {
		this.bottomSheet.closeDialog();
	}
}
