import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MockProducts, ProductModel } from '../mocks/products-mock';


@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	products$ :BehaviorSubject<Array<ProductModel>> = new BehaviorSubject<Array<ProductModel>>(MockProducts);

	constructor() {
	}
}
