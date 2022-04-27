import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
	selector: 'app-swiper',
	templateUrl: './swiper.component.html',
	styleUrls: ['./swiper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class SwiperComponent implements OnInit{
	config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 50,
		navigation: true,
		loop: true,
		autoplay: true,
	}

	onSwiper([swiper]: any) {
		console.log(swiper);
	}

	onSlideChange() {
		console.log('slide change')
	}

	constructor() { }

	ngOnInit(): void {
	}
}
