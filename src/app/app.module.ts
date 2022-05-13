import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { SearchInputComponent } from '@components/ui/search-input/search-input.component';
import { DropDownListComponent } from '@components/ui/drop-down-list/drop-down-list.component';
import { FullMapCardComponent } from '@components/cards/collectionPointsCards/full-map-card/full-map-card.component';
import { ProfileComponent } from '@pages/profile/profile.component';
import { ProfileCardsSwitcherComponent } from '@components/profile-cards-switcher/profile-cards-switcher.component';
import { PromoCardComponent } from '@components/cards/promo-card/promo-card.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';

import { CheckboxGroupComponent } from '@containers/checkbox-group/checkbox-group.component';
import { CheckboxItemComponent } from '@components/ui/checkbox-item/checkbox-item.component';
import { DialogModule } from '@angular/cdk-experimental/dialog';
import { ModalContainerComponent } from '@components/modals/modal-container/modal-container.component';
import { LoginModalComponent } from '@components/modals/login-modal/login-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from '@services/auth-interceptor.service';
import { UrlInterceptorService } from '@services/url-interceptor.service';
import { ErrorInterceptorService } from '@services/error-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { SignUpModalComponent } from '@components/modals/sign-up-modal/sign-up-modal.component';
import { DialogCloseDirective } from '@directives/dialog-close.directive';
import { ModalHeaderComponent } from '@components/modals/modal-header/modal-header.component';

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
		CheckboxGroupComponent,
		CheckboxItemComponent,
		ModalContainerComponent,
		LoginModalComponent,
		MapPageComponent,
		MapComponent,
		CommonMapCardComponent,
		SearchInputComponent,
		DropDownListComponent,
		FullMapCardComponent,
		ProfileComponent,
		ProfileCardsSwitcherComponent,
		PromoCardComponent,
		HistoryCardComponent,
		SignUpModalComponent,
		DialogCloseDirective,
  ModalHeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SwiperModule,
		ReactiveFormsModule,
		DialogModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ToastrModule.forRoot({
			timeOut: 2500,
			progressBar: true,
			positionClass: 'toast-bottom-center'
		}),
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: UrlInterceptorService,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
