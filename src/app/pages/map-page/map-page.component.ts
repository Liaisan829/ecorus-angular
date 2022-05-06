import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CollPointsService } from '@services/collPoints.service';

@Component({
	selector: 'app-map-page',
	templateUrl: './map-page.component.html',
	styleUrls: ['./map-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent implements OnInit {
	collPoints$ = this.collPointsService.collPoints$

	selected = 0;

	constructor(private collPointsService: CollPointsService) {
	}

	ngOnInit(): void {
	}

	onChange(n:number) {
		this.selected = n;
	}

}
