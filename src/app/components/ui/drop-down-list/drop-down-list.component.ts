import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-drop-down-list',
	templateUrl: './drop-down-list.component.html',
	styleUrls: ['./drop-down-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownListComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	@Input() items!: string[];
}
