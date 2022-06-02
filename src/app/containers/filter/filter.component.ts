import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
	formGroup: FormGroup;

	constructor(private fb: FormBuilder) {
		this.formGroup = this.fb.group({
			genderGroup: this.fb.group({
				man: [false],
				woman: [false]
			}),

			typeGroup: this.fb.group({
				selectAll: [false],
				shoes: [false],
				clothing: [false],
				accessories: [false],
			}),

			brandGroup: this.fb.group({
				selectAll: [false],
				nike: [false],
				adidas: [false],
				puma: [false],
				rebook: [false],
				hm: [false],
			})
		});

		this.formGroup.valueChanges.subscribe(res => console.log(res))
		this.formGroup.get("typeGroup")?.get("selectAll")?.valueChanges.subscribe(value=>this.selectAll("typeGroup",value))
		this.formGroup.get("brandGroup")?.get("selectAll")?.valueChanges.subscribe(value=>this.selectAll("brandGroup",value))
	}

	selectAll(groupName: string,isSelect: boolean) {
		console.log("Select all ",groupName)
		Object.keys((<FormGroup>this.formGroup.get(groupName)!).controls).forEach(key => {
			if(key!=="selectAll"){
				this.formGroup.get(groupName)?.get(key)?.setValue(isSelect)
			}
		});
	}

	get typeGroup(): FormGroup {
		return this.formGroup.get('typeGroup') as FormGroup
	}
}
