import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToastService } from '@services/toast.service';
import { AuthService } from '@services/auth.service';
import { DialogService } from '@services/dialog.service';
import { EmailValidator, NameValidators, PasswordValidators, PhoneValidator } from '@utils/validations.utils';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginModalComponent } from '@components/modals/login-modal/login-modal.component';

@Component({
	selector: 'app-sign-up-modal',
	templateUrl: './sign-up-modal.component.html',
	styleUrls: ['./sign-up-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpModalComponent {
	regForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private toast: ToastService,
		private authService: AuthService,
		private dialog: DialogService
	) {
		this.regForm = this.fb.group({
			firstname: ['', [...NameValidators]],
			phone_number: ['', [...PhoneValidator]],
			email: ['', [...EmailValidator]],
			password: ['', [...PasswordValidators]]
		})
		this.regForm.markAllAsTouched()
	}

	openLoginModal() {
		this.dialog.openDialog(LoginModalComponent, {
			data: {
				title: 'Вход'
			}
		})
	}

	control(name: string) {
		return this.regForm.get(name);
	}

	signup(): void {
		if (!this.regForm.valid) {
			this.toast.error('Заполните все поля!');
			return;
		}

		this.authService.registration(this.regForm.value).subscribe(res => {
			this.toast.success('Вы успешно зарегистрированы!');
			window.location.reload();
		}, err => {
			console.log(err);
			this.toast.success('Проблемы с сервером');
		})
	}

	hasError(formControlName: string, errorName: string) {
		return this.control(formControlName)?.touched && this.control(formControlName)?.dirty && this.control(formControlName)?.hasError(errorName)
	}
}
