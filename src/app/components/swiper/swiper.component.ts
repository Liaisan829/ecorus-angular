import { Component, ChangeDetectionStrategy, ViewEncapsulation, SecurityContext } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
import { DomSanitizer } from '@angular/platform-browser';

SwiperCore.use([Navigation, Autoplay]);

@Component({
	selector: 'app-swiper',
	templateUrl: './swiper.component.html',
	styleUrls: ['./swiper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class SwiperComponent {
	//TODO пока не работает
	// constructor(private sanitizer: DomSanitizer) {
	// 	this.sanitizer.bypassSecurityTrustHtml(this.greenCard)
	// 	this.sanitizer.sanitize(SecurityContext.HTML, this.yellowCard)
	// 	this.sanitizer.bypassSecurityTrustHtml(this.blueCard)
	// }

	greenCard = 'Сдай макулатуру или старую одежду и&nbsp;получи скидку на&nbsp;покупку товаров из&nbsp;переработанных материалов';
	yellowCard = 'что среднее время разложения пластмассовых изделий колеблется от&nbsp;400 до&nbsp;700&nbsp;лет, а&nbsp;полиэтиленовых пакетов&nbsp;&mdash; от&nbsp;100 до&nbsp;200&nbsp;лет?';
	blueCard = 'Медицинские маски не&nbsp;обязательно должны становиться отходами. Их&nbsp;тоже можно сдать на&nbsp;переработку.';

	config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 50,
		navigation: true,
		loop: true,
		autoplay: true,
	}
}
