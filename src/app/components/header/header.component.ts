import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { LoginModalComponent } from '@components/modals/login-modal/login-modal.component';
import { ProfileService } from '@services/profile.service';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidebarPanelComponent } from '@components/sidebar-panel/sidebar-panel.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
	user$ = new BehaviorSubject<User | null>(null);
	destroy$ = new Subject();

	constructor(
		private dialog: DialogService,
		private profileService: ProfileService,
		public authService: AuthService
	) {
	}

	ngOnInit() {
		if (this.authService.isAuthorized) {
			this.profileService.getProfile()
				.pipe(takeUntil(this.destroy$))
				.subscribe(
					(response: User) => {
						this.user$.next(response);
					}
				);
		}
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	openLoginModal() {
		this.dialog.openDialog(LoginModalComponent, {
			data: {
				title: 'Вход'
			}
		});
	}

	openSidebarPanel() {
		this.dialog.openDialog(SidebarPanelComponent, {
			data: {
				title: 'Меню'
			}
		});
	}
}
