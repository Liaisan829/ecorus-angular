import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@components/header/header.component';
import { EcomarketCardComponent } from '@components/cards/ecomarket-card/ecomarket-card.component';
import { ButtonComponent } from '@components/ui/button/button.component';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';
import { FooterComponent } from '@components/footer/footer.component';
import { IconComponent } from '@components/ui/icon/icon.component';
import { PromocodeCardComponent } from '@components/cards/promocode-card/promocode-card.component';
import { SliderCardComponent } from '@components/cards/slider-card/slider-card.component';
import { BottomCardComponent } from '@components/cards/bottom-card/bottom-card.component';
import { SwiperComponent } from '@components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { MainComponent } from '@pages/main/main.component';
import { SortingButtonsComponent } from '@containers/sorting-buttons/sorting-buttons.component';
import { MapPageComponent } from '@pages/map-page/map-page.component';
import { MapComponent } from '@components/map/map.component';
import { CommonMapCardComponent } from '@components/cards/collectionPointsCards/common-map-card/common-map-card.component';
import { SearchInputComponent } from './components/ui/search-input/search-input.component';
import { DropDownListComponent } from './components/ui/drop-down-list/drop-down-list.component';
import { FullMapCardComponent } from './components/cards/collectionPointsCards/full-map-card/full-map-card.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		EcomarketCardComponent,
		ButtonComponent,
		EcomarketComponent,
		FooterComponent,
		IconComponent,
		PromocodeCardComponent,
		MainComponent,
		SliderCardComponent,
		BottomCardComponent,
		SwiperComponent,
		MainComponent,
		SortingButtonsComponent,
		MapPageComponent,
  MapComponent,
  CommonMapCardComponent,
  SearchInputComponent,
  DropDownListComponent,
  FullMapCardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SwiperModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
