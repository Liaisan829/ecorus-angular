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
	openFull: boolean = false;

	constructor(
		private collPointsService: CollPointsService,
		public activateRoute: ActivatedRoute
	) {
	}

	check() {
		if (this.activateRoute.snapshot.params['id']) {
			this.openFull = true
		} else {
			this.openFull = false
		}
	}
}
