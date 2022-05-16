import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProfileComponent } from '@pages/profile/profile.component';

@Component({
	selector: 'app-history-card',
	templateUrl: './history-card.component.html',
	styleUrls: ['./history-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryCardComponent {

	constructor(private profile: ProfileComponent) {
	}

	@Input() history$ = this.profile.history$;
}
