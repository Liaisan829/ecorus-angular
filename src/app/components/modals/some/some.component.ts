import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
