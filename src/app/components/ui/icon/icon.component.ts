import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {

  constructor() {
		  this.name="";
		  this.width="";
		  this.height="";
  }

  ngOnInit(): void {
  }

  @Input() width: string | number;
  @Input() height: string | number;
  @Input() name: string;

}