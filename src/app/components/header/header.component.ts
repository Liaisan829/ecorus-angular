import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { SomeComponent } from '@components/modals/some/some.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
  }

	openLoginModal(){
	  this.dialog.openDialog(SomeComponent);
	}

}
