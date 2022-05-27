import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollPoint } from '@models/coll-point';
import { CollPointsService } from '@services/collPoints.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-full-map-card',
	templateUrl: './full-map-card.component.html',
	styleUrls: ['./full-map-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullMapCardComponent {
	collPoints$ = this.collPointsService.collPoints$;
	collPoint: CollPoint | null = null
	id: number = this.activateRoute.snapshot.params['id'];

	constructor(
		private collPointsService: CollPointsService,
		private activateRoute: ActivatedRoute,
	) {
	}

	ngOnInit() {
		this.collPoints$
			.getValue()
			.filter((collPoint: CollPoint) => (collPoint.id === +this.id))
			.map((point: CollPoint) => {
				this.collPoint = point
			})
	}
}
