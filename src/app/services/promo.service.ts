import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface PromoModel {
	price: string,
	date: string,
	link: string
}

const MockPromo: Array<PromoModel> = [
	{
		price: '1000 р',
		date: '25.09.2021',
		link: 'adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...'
	},
	{
		price: '100 р',
		date: '13.05.2022',
		link: 'adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...'
	},
	{
		price: '400 р',
		date: '14.03.2021',
		link: 'adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...'
	}
]

@Injectable({
	providedIn: 'root'
})
export class PromoService {
	promo$ :BehaviorSubject<Array<PromoModel>> = new BehaviorSubject<Array<PromoModel>>(MockPromo);

	constructor() {
	}
}
