import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollPointsService } from '@services/collPoints.service';
import { ActivatedRoute } from '@angular/router';

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
		public activateRoute: ActivatedRoute
	) {
	}

	openMapFilterBottomSheet(){
		console.log("map page filter")
	}
}
