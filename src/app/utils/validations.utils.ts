import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export const PasswordRegExp = /^[A-Za-z][A-Za-z0-9]*$/;
export const PhoneRegExp = /^((\+7|7|8)+([0-9]){10})$/;

export const PasswordSpecialSymbols = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
export const NumbersRegExp = /\d/;
export const RussianLettersPattern = /^[а-яёА-ЯЁ][а-яёА-ЯЁ -]*$/;
export const NameValidators = [Validators.pattern(RussianLettersPattern), Validators.maxLength(60)];

export const PhoneValidator = [
	Validators.required,
	Validators.pattern(PhoneRegExp)
];

export const PasswordValidators = [
	Validators.required,
	Validators.minLength(4),
	Validators.maxLength(10),
	Validators.pattern(PasswordRegExp)
];

export const CheckIfErrorEmpty = (error: ValidationErrors | null) => {
	return error && Object.keys(error).length ? error : null;
};

export const validatePasswords = (
	passField: string = 'password',
	confirmPasswordField: string = 'confirmPassword'
): ValidatorFn => {
	return (control: AbstractControl): ValidationErrors | null => {
		const password: AbstractControl | null = control?.get(passField);
		const confirmPassword: AbstractControl | null = control?.get(confirmPasswordField);

		const passwordErrors = password?.errors ?? null;
		const confirmPasswordErrors = confirmPassword?.errors ?? null;

		if (password?.value !== confirmPassword?.value) {
			confirmPassword?.setErrors({ ...confirmPasswordErrors, notSame: true }, { emitEvent: false });
			return { notSame: true };
		}

		delete passwordErrors?.duplicateEmail;
		delete confirmPasswordErrors?.notSame;
		password?.setErrors(CheckIfErrorEmpty(passwordErrors), { emitEvent: false });
		confirmPassword?.setErrors(CheckIfErrorEmpty(confirmPasswordErrors), { emitEvent: false });

		return null;
	};
};
