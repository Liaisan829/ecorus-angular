import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ProductModel {
	id: number,
	brand: string,
	img: string,
	title: string,
	gender: string,
	price: string
}

const MockProducts: Array<ProductModel> = [
	{
		id: 1,
		brand: 'NIKE',
		img: '/assets/ecoMarket/sneak1.svg',
		title: 'Nike Air Max 2022',
		gender: 'Мужская обувь',
		price: '1000'
	},
	{
		id: 2,
		brand: 'NIKE',
		img: '/assets/ecoMarket/sneak2.svg',
		title: 'Nike Air Max 90 Premium',
		gender: 'Мужская обувь',
		price: '750'
	},
	{
		id: 3,
		brand: 'Adidas',
		img: '/assets/ecoMarket/sneak3.svg',
		title: 'Adidas Alphabounce RC',
		gender: 'Мужская обувь',
		price: '1200'
	},
	{
		id: 4,
		brand: 'H&M',
		img: '/assets/ecoMarket/hoodie.svg',
		title: 'Nike Air Max 2021',
		gender: 'Мужское худи',
		price: '1000'
	},
	{
		id: 5,
		brand: 'NIKE',
		img: '/assets/ecoMarket/sneak4.svg',
		title: 'Nike Air Force 1 Low',
		gender: 'Мужская обувь',
		price: '2100'
	},
	{
		id: 6,
		brand: 'NIKE',
		img: '/assets/ecoMarket/sneak2.svg',
		title: 'Nike Air Max 90 Premium',
		gender: 'Мужская обувь',
		price: '750'
	},
	{
		id: 7,
		brand: 'NIKE',
		img: '/assets/ecoMarket/sneak1.svg',
		title: 'Nike Air Max 2022',
		gender: 'Мужская обувь',
		price: '1000'
	},
	{
		id: 8,
		brand: 'Adidas',
		img: '/assets/ecoMarket/sneak3.svg',
		title: 'Adidas Alphabounce RC',
		gender: 'Мужская обувь',
		price: '1200'
	},
	{
		id: 9,
		brand: 'H&M',
		img: '/assets/ecoMarket/hoodie.svg',
		title: 'Nike Air Max 2021',
		gender: 'Мужское худи',
		price: '1000'
	},
]

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	products$ :BehaviorSubject<Array<ProductModel>> = new BehaviorSubject<Array<ProductModel>>(MockProducts);

	constructor() {
	}
}
