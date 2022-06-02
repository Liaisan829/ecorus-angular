import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-checkbox-item',
	templateUrl: './checkbox-item.component.html',
	styleUrls: ['./checkbox-item.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() =>CheckboxItemComponent),
			multi: true
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxItemComponent {

	isChecked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	onChange = (isChecked: boolean) => {
	};

	@Input() title: string = '';
	onTouched = () => {
	};

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	changeState(): void {
		this.isChecked.next(!this.isChecked.value);
		this.onChange(this.isChecked.value);
	}

	registerOnTouched(onTouched: any) {
		this.onTouched = onTouched;
	}

	writeValue(isChecked: boolean): void {
		console.log(isChecked, this.title)
		this.isChecked.next(isChecked);
	}
}
