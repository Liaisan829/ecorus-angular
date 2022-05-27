import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutContainerComponent {
	@Input() hasFooter = true;
}
