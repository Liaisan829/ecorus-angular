import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-qr-modal',
	templateUrl: './qr-modal.component.html',
	styleUrls: ['./qr-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrModalComponent implements OnInit {
	qrForm: FormGroup;

	constructor(private fb: FormBuilder,) {
		this.qrForm = this.fb.group({})
	}

	ngOnInit(): void {
	}
}
