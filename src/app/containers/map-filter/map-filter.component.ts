import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-map-filter',
	templateUrl: './map-filter.component.html',
	styleUrls: ['./map-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapFilterComponent {
	formGroup: FormGroup;

	constructor(private fb: FormBuilder) {
		this.formGroup = this.fb.group({
			material: this.fb.group({
				selectAll: [false],
				plastic: [false],
				shoes: [false],
				clothes: [false],
				glass: [false]
			}),

			brand: this.fb.group({
				nike: [false],
				adidas: [false],
				puma: [false],
				rebook: [false],
				hm: [false],
			})
		})
		this.formGroup.get('material')?.get('selectAll')?.valueChanges.subscribe(value => this.selectAll('material', value))
	}


	selectAll(groupName: string, isSelect: boolean) {
		console.log('Select all ', groupName)
		Object.keys((<FormGroup>this.formGroup.get(groupName)!).controls).forEach(key => {
			if (key !== 'selectAll') {
				this.formGroup.get(groupName)?.get(key)?.setValue(isSelect)
			}
		});
	}

}
