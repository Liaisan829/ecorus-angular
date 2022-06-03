import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BottomSheetService } from '@services/bottom-sheet.service';

@Component({
	selector: 'app-eco-filter-bottom-sheet',
	templateUrl: './eco-filter-bottom-sheet.component.html',
	styleUrls: ['./eco-filter-bottom-sheet.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcoFilterBottomSheetComponent {
	headersFilters: Array<string> = ['По популярности', 'По цене', 'По новизне']
	genderFilters: Array<string> = ['Мужской', 'Женский']
	categoryFilters: Array<string> = ['Одежда', 'Обувь', 'Аксессуары']
	brandFilters: Array<string> = ['H&M', 'P&B', 'Adidas', 'Nike', 'Rebook', 'H&M', 'P&B', 'Adidas', 'Nike', 'Rebook', 'H&M', 'P&B', 'Adidas', 'Nike', 'Rebook']

	constructor(private bottomSheet: BottomSheetService) {
	}

	closeBottomSheet() {
		this.bottomSheet.closeDialog();
	}
}
