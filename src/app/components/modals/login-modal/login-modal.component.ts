import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-login-modal',
	templateUrl: './login-modal.component.html',
	styleUrls: ['./login-modal.component.scss', '../modal-container/modal-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginModalComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
