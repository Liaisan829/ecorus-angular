import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BottomSheetService } from '@services/bottom-sheet.service';

@Component({
	selector: 'app-map-filter-bottom-sheet',
	templateUrl: './map-filter-bottom-sheet.component.html',
	styleUrls: ['./map-filter-bottom-sheet.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapFilterBottomSheetComponent {
	constructor(private bottomSheet: BottomSheetService) {
	}

	closeBottomSheet() {
		this.bottomSheet.closeDialog();
	}
}
