import { AfterContentChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { CollPointsService } from '@services/collPoints.service';
import { BottomSheetService } from '@services/bottom-sheet.service';
import { MapFilterBottomSheetComponent } from '@components/bottom-sheets/map-filter-bottom-sheet/map-filter-bottom-sheet.component';
import { MapCardsBottomSheetComponent } from '@components/bottom-sheets/map-cards-bottom-sheet/map-cards-bottom-sheet.component';
import { CollPoint } from '@models/coll-point';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-map-page',
	templateUrl: './map-page.component.html',
	styleUrls: ['./map-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent implements AfterContentChecked {
	collPoints$ = this.collPointsService.collPoints$
	collPoint: CollPoint | null = null;
	id!: number

	constructor(
		private collPointsService: CollPointsService,
		private bottomSheet: BottomSheetService,
		private route: ActivatedRoute,
	) {
	}

	openMapFilterBottomSheet() {
		this.bottomSheet.openDialog(MapFilterBottomSheetComponent)
	}

	openMapCardsBottomSheet() {
		this.bottomSheet.openDialog(MapCardsBottomSheetComponent)
	}

	ngAfterContentChecked(): void {
			this.route.queryParamMap.subscribe(param => {
				this.id = Number(param.get('cardId'))
			})

			this.collPoints$
				.getValue()
				.filter((collPoint: CollPoint) => (collPoint.id === this.id))
				.map((point: CollPoint) => {
					this.collPoint = point
				});
	}
}
