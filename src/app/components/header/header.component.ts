import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { LoginModalComponent } from '@components/modals/login-modal/login-modal.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

	constructor(private dialog: DialogService) {
	}

	openLoginModal() {
		this.dialog.openDialog(LoginModalComponent, {
			data: {
				title: 'Вход'
			}
		});
	}
}
