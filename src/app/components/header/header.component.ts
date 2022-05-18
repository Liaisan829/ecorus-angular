import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { LoginModalComponent } from '@components/modals/login-modal/login-modal.component';
import { ProfileService } from '@services/profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@models/user';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	userAuth = localStorage.getItem('token');
	user: User | null = null;

	constructor(
		private dialog: DialogService,
		private profileService: ProfileService
	) {
	}

	ngOnInit() {
		if (this.userAuth) {
			this.profileService.getProfile().subscribe(
				(response: User) => {
					this.user = response;
					console.log(this.user.username);
				},
				(error: HttpErrorResponse) => {
					alert(error.message);
				}
			);
		}
	}

	openLoginModal() {
		this.dialog.openDialog(LoginModalComponent, {
			data: {
				title: 'Вход'
			}
		});
	}
}
