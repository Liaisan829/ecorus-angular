import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '@services/products.service';
import { EcoFilterBottomSheetComponent } from '@components/bottom-sheets/eco-filter-bottom-sheet/eco-filter-bottom-sheet.component';
import { BottomSheetService } from '@services/bottom-sheet.service';

@Component({
	selector: 'app-ecomarket',
	templateUrl: './ecomarket.component.html',
	styleUrls: ['./ecomarket.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketComponent {

	products$ = this.productsService.products$

	constructor(
		private productsService: ProductsService,
		private bottomSheet: BottomSheetService
	) {
	}

	openEcoFilterBottomSheet() {
		this.bottomSheet.openDialog(EcoFilterBottomSheetComponent);
	}
}
