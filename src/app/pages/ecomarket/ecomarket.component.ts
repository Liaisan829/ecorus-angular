import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { ProductsService } from '@services/products.service';
import { EcoFilterBottomSheetComponent } from '@components/bottom-sheets/eco-filter-bottom-sheet/eco-filter-bottom-sheet.component';
import { BottomSheetService } from '@services/bottom-sheet.service';

@Component({
	selector: 'app-ecomarket',
	templateUrl: './ecomarket.component.html',
	styleUrls: ['./ecomarket.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketComponent implements OnInit {

	products$ = this.productsService.products$;

	loading: boolean = true;

	constructor(
		private productsService: ProductsService,
		private bottomSheet: BottomSheetService,
		private cdr: ChangeDetectorRef
	) {
	}

	ngOnInit(){
		setTimeout(() => {
			this.loading = false;
			this.cdr.markForCheck();
		}, 3500);
	}

	openEcoFilterBottomSheet() {
		this.bottomSheet.openDialog(EcoFilterBottomSheetComponent);
	}
}
