import { Component, ChangeDetectionStrategy } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperComponent {
	config: SwiperOptions = {
		slidesPerView: 1,
		navigation: true,
		loop: true,
		autoplay: true,
	}
	onSwiper([swiper]: any){
		console.log(swiper);
	}
	onSlideChange(){
		console.log('slide change')
	}
}
