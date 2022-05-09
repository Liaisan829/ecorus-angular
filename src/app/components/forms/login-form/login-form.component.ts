import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@services/toast.service';
import { AuthService } from '@services/auth.service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
	form: FormGroup;

	constructor(
		private fd: FormBuilder,
		private toast: ToastService,
		private authService: AuthService
	) {
		this.form = this.fd.group({
			login: ['', [Validators.required, Validators.minLength(4)]],
			password: ['', [Validators.required, Validators.minLength(4)]]
		});

		this.form.markAllAsTouched();
	}

	control(name: string) {
		return this.form.get(name);
	}

	login(): void {
		if (!this.form.valid) {
			this.toast.error('Заполните все поля!');
			return;
		}

		this.authService.authorize(this.form.value).subscribe(res => {
			this.toast.success('Добро пожаловать!');
			this.authService.token = res.token;
		}, err => {
			console.log(err);
		})
	}

}
