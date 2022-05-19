import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { LoginModalComponent } from '@components/modals/login-modal/login-modal.component';
import { ProfileService } from '@services/profile.service';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	userAuth = this.authService.isAuthorized();
	user: User | null = null;
	userBalance: number = 0;

	constructor(
		private dialog: DialogService,
		private profileService: ProfileService,
		private authService: AuthService
	) {
	}

	ngOnInit() {
		if (this.userAuth) {
			this.profileService.getProfile().subscribe(
				(response: User) => {
					this.user = response;
				}
			);
		}

		this.profileService.getUserBalance().subscribe(
			(response: number)=>{
				this.userBalance = response;
			}
		)
	}

	openLoginModal() {
		this.dialog.openDialog(LoginModalComponent, {
			data: {
				title: 'Вход'
			}
		});
	}
}
