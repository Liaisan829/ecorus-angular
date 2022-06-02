import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-checkbox-group',
	templateUrl: './checkbox-group.component.html',
	styleUrls: ['./checkbox-group.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckboxGroupComponent {
	allGenders: Array<any>;
	allTypes: Array<any>;
	allBrands: Array<any>;


	constructor() {

		this.allGenders = [
			{ name: 'Мужской', checked: false },
			{ name: 'Женский', checked: false }
		]
		this.allTypes = [
			{ name: 'Выбрать все', checked: false, value: 'all' },
			{ name: 'Одежда', checked: false },
			{ name: 'Обувь', checked: false },
			{ name: 'Аксессуары', checked: false }
		]
		this.allBrands = [
			{ name: 'Выбрать все', checked: false, value: 'all' },
			{ name: 'H&M', checked: false },
			{ name: 'P&B', checked: false },
			{ name: 'Adidas', checked: false },
			{ name: 'Nike', checked: false },
			{ name: 'Rebook', checked: false }
		]
	}

	// genders$ = this.filterService.genders$;
	// types$ = this.filterService.types$;
	// brands$ = this.filterService.brands$;
	//
	// constructor(private filterService: FilterService) {
	// }


	resetFilter() {
		this.allGenders = this.allGenders.map((gender) => Object.assign({}, {
			...gender,
			checked: false
		}));
		this.allTypes = this.allTypes.map((type) => Object.assign({}, {
			...type,
			checked: false
		}));
		this.allBrands = this.allBrands.map((brand) => Object.assign({}, {
			...brand,
			checked: false
		}));
	}
}
