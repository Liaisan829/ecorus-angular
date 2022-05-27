import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CollPointsService } from '@services/collPoints.service';

@Component({
  selector: 'app-coll-points-full',
  templateUrl: './coll-points-full.component.html',
  styleUrls: ['./coll-points-full.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollPointsFullComponent implements OnInit{
	constructor(private collPointsService: CollPointsService) {
	}

	ngOnInit() {

	}

}
