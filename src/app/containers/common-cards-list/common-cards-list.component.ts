import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollPointsService } from '@services/collPoints.service';

@Component({
	selector: 'app-common-cards-list',
	templateUrl: './common-cards-list.component.html',
	styleUrls: ['./common-cards-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonCardsListComponent {

	collPoints$ = this.collPointsService.collPoints$

	constructor(
		private collPointsService: CollPointsService,
	) {
	}
}
