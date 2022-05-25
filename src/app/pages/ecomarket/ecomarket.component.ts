import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '@services/products.service';
import { DialogService } from '@services/dialog.service';
import { EcoFilterBottomSheetComponent } from '@components/bottom-sheets/eco-filter-bottom-sheet/eco-filter-bottom-sheet.component';

@Component({
	selector: 'app-ecomarket',
	templateUrl: './ecomarket.component.html',
	styleUrls: ['./ecomarket.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketComponent {

	products$ = this.productsService.products$

	constructor(private productsService: ProductsService, private dialog: DialogService) {
	}

	openEcoFilterBottomSheet(){
		this.dialog.openDialog(EcoFilterBottomSheetComponent);
	}
}
