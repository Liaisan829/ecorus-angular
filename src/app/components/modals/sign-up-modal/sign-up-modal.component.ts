import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-sign-up-modal',
	templateUrl: './sign-up-modal.component.html',
	styleUrls: ['./sign-up-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpModalComponent {
	regForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.regForm = this.fb.group({

		})
	}
}
