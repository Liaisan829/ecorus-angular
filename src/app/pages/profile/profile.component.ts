import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { HistoryService } from '@services/history.service';
import { ProfileService } from '@services/profile.service';
import { User } from '@models/user';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy {

	history$ = this.historyService.history$
	user$ = new BehaviorSubject<User | null>(null);
	destroy$ = new Subject();

	constructor(
		private historyService: HistoryService,
		private profileService: ProfileService,
	) {
	}

	ngOnInit() {
		this.profileService.getProfile()
			.pipe(takeUntil(this.destroy$))
			.subscribe(
				(response: User) => {
					this.user$.next(response);
				}
			)
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
