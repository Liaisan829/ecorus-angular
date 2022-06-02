import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BottomSheetService } from '@services/bottom-sheet.service';
import { CollPointsService } from '@services/collPoints.service';

@Component({
	selector: 'app-map-cards-bottom-sheet',
	templateUrl: './map-cards-bottom-sheet.component.html',
	styleUrls: ['./map-cards-bottom-sheet.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapCardsBottomSheetComponent {
	collPoints$ = this.collPointsService.collPoints$

	constructor(private collPointsService: CollPointsService,
				private bottomSheet: BottomSheetService) {
	}

}
