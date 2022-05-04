import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
	form: FormGroup;

	constructor(private fd: FormBuilder) {
		this.form = this.fd.group({
			phone: ['', [Validators.required, Validators.minLength(4)]],
			password: ['', [Validators.required, Validators.minLength(10)]]
		});

		this.form.markAllAsTouched();

		console.log(this.form);
	}

	control(name: string) {
		return this.form.get(name);
	}

}
