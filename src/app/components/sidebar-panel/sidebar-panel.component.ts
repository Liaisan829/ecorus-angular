import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '@models/user';
import { DialogService } from '@services/dialog.service';
import { ProfileService } from '@services/profile.service';
import { AuthService } from '@services/auth.service';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-sidebar-panel',
	templateUrl: './sidebar-panel.component.html',
	styleUrls: ['./sidebar-panel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarPanelComponent implements OnInit {

	user$ = new BehaviorSubject<User | null>(null);
	destroy$ = new Subject();

	constructor(
		private dialog: DialogService,
		private profileService: ProfileService,
		private route: Router,
		public authService: AuthService,
	) {
	}

	openProfile() {
		this.route.navigate(['/profile/history'])
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

}
