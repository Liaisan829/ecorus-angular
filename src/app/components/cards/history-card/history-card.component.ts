import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProfileComponent } from '@pages/profile/profile.component';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryCardComponent implements OnInit {

  constructor(private profile: ProfileComponent) { }

  ngOnInit(): void {
  }

	@Input() history$ = this.profile.history$;

}
