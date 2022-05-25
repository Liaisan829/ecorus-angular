import { Injectable } from '@angular/core';

interface FilterModel {
	title: string;
	checked: boolean;
}

const filterBtnsMock: Array<string> = [
	'По популярности', 'По цене', 'По новизне'
]

const gendersMock: Array<FilterModel> = [
	{ title: 'Мужской', checked: false },
	{ title: 'Женский', checked: false }
];

const typesMock: Array<FilterModel> = [
	{ title: 'Одежда', checked: false },
	{ title: 'Обувь', checked: false },
	{ title: 'Аксессуары', checked: false }
]
const brandsMock: Array<FilterModel> = [
	{ title: 'H&M', checked: false },
	{ title: 'P&B', checked: false },
	{ title: 'Adidas', checked: false },
	{ title: 'Nike', checked: false },
	{ title: 'Rebook', checked: false }
]

@Injectable({
	providedIn: 'root'
})
export class FilterService {
	filterBtns$: Array<string> = filterBtnsMock;
	genders$: Array<FilterModel> = gendersMock;
	types$: Array<FilterModel> = typesMock;
	brands$: Array<FilterModel> = brandsMock;

	constructor() {
	}
}
