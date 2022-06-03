import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CollPoint } from '@models/coll-point';

@Component({
	selector: 'app-full-map-card',
	templateUrl: './full-map-card.component.html',
	styleUrls: ['./full-map-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullMapCardComponent {
	@Input() collPoint: CollPoint | null = null

	// collPoints$ = this.collPointsService.collPoints$;
	// collPoint: CollPoint | null = null;
	// id!: string | null;
	//
	// constructor(
	// 	private collPointsService: CollPointsService,
	// 	private activateRoute: ActivatedRoute,
	// ) {
	// }
	//
	// ngOnInit() {
	// 	this.activateRoute.queryParamMap.subscribe(value => {
	// 		this.id = value.get('cardId');
	// 	});
	//
	// 	this.collPoints$
	// 		.getValue()
	// 		.filter((collPoint: CollPoint) => (collPoint.id === +this.id!))
	// 		.map((point: CollPoint) => {
	// 			this.collPoint = point
	// 		});
	// }
}
