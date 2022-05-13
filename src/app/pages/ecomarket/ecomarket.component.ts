import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '@services/products.service';

@Component({
	selector: 'app-ecomarket',
	templateUrl: './ecomarket.component.html',
	styleUrls: ['./ecomarket.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketComponent {

	products$ = this.productsService.products$

	constructor(private productsService: ProductsService) {
	}
}
