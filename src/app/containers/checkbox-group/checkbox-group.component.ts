import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FilterService } from '@services/filter.service';

@Component({
	selector: 'app-checkbox-group',
	templateUrl: './checkbox-group.component.html',
	styleUrls: ['./checkbox-group.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckboxGroupComponent {

	genders$ = this.filterService.genders$;
	types$ = this.filterService.types$;
	brands$ = this.filterService.brands$;

	constructor(private filterService: FilterService) {
		console.log(this.types$);
	}
}
