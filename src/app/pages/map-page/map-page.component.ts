import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollPointsService } from '@services/collPoints.service';
import { BottomSheetService } from '@services/bottom-sheet.service';
import { MapFilterBottomSheetComponent } from '@components/bottom-sheets/map-filter-bottom-sheet/map-filter-bottom-sheet.component';

@Component({
	selector: 'app-map-page',
	templateUrl: './map-page.component.html',
	styleUrls: ['./map-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent {
	collPoints$ = this.collPointsService.collPoints$

	constructor(
		private collPointsService: CollPointsService,
		private bottomSheet: BottomSheetService
	) {
	}

	openMapFilterBottomSheet() {
		this.bottomSheet.openDialog(MapFilterBottomSheetComponent)
	}
}
