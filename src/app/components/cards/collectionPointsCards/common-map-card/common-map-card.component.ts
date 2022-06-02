import { Component, ChangeDetectionStrategy, Input} from '@angular/core';
import { CollPoint } from '@models/coll-point';

@Component({
	selector: 'app-common-map-card',
	templateUrl: './common-map-card.component.html',
	styleUrls: ['./common-map-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonMapCardComponent {
	@Input() collPoint: CollPoint | null = null;

}
