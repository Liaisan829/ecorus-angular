import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from '@angular/cdk-experimental/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { HeaderComponent } from '@components/header/header.component';
import { EcomarketCardComponent } from '@components/cards/ecomarket-card/ecomarket-card.component';
import { ButtonComponent } from '@components/ui/button/button.component';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';
import { FooterComponent } from '@components/footer/footer.component';
import { EcoPromoCardComponent } from '@components/cards/eco-promo-card/eco-promo-card.component';
import { SliderCardComponent } from '@components/cards/slider-card/slider-card.component';
import { MainPageCardComponent } from '@components/cards/main-page-card/main-page-card.component';
import { SwiperComponent } from '@components/swiper/swiper.component';
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
import { ProfilePromoCardComponent } from '@components/cards/profile-promo-card/profile-promo-card.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';
import { CheckboxGroupComponent } from '@containers/checkbox-group/checkbox-group.component';
import { CheckboxItemComponent } from '@components/ui/checkbox-item/checkbox-item.component';
import { ModalContainerComponent } from '@components/modals/modal-container/modal-container.component';
import { LoginModalComponent } from '@components/modals/login-modal/login-modal.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from '@services/auth-interceptor.service';
import { UrlInterceptorService } from '@services/url-interceptor.service';
import { ErrorInterceptorService } from '@services/error-interceptor.service';
import { SignUpModalComponent } from '@components/modals/sign-up-modal/sign-up-modal.component';
import { DialogCloseDirective } from '@directives/dialog-close.directive';
import { ModalHeaderComponent } from '@components/modals/modal-header/modal-header.component';
import { QrModalComponent } from '@components/modals/qr-modal/qr-modal.component';
import { ProfilePromoCardsComponent } from '@containers/profile-promo-cards/profile-promo-cards.component';
import { EcoFilterBottomSheetComponent } from '@components/bottom-sheets/eco-filter-bottom-sheet/eco-filter-bottom-sheet.component';
import { BottomSheetContainerComponent } from '@components/bottom-sheets/bottom-sheet-container/bottom-sheet-container.component';
import { SidebarPanelComponent } from '@components/sidebar-panel/sidebar-panel.component';
import { BottomSheetHeaderComponent } from '@components/bottom-sheets/bottom-sheet-header/bottom-sheet-header.component';
import { MapCardsBottomSheetComponent } from '@components/bottom-sheets/map-cards-bottom-sheet/map-cards-bottom-sheet.component';
import { MapFilterBottomSheetComponent } from '@components/bottom-sheets/map-filter-bottom-sheet/map-filter-bottom-sheet.component';
import { BottomSheetWrapperComponent } from '@components/bottom-sheets/bottom-sheet-wrapper/bottom-sheet-wrapper.component';
import { EcomarketSkeletonComponent } from '@components/animation/skeletons/ecomarket-skeleton/ecomarket-skeleton.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProfileSkeletonComponent } from '@components/animation/skeletons/profile-skeleton/profile-skeleton.component';
import { FilterComponent } from '@containers/filter/filter.component';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		EcomarketCardComponent,
		ButtonComponent,
		EcomarketComponent,
		FooterComponent,
		EcoPromoCardComponent,
		MainComponent,
		SliderCardComponent,
		MainPageCardComponent,
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
		ProfilePromoCardComponent,
		HistoryCardComponent,
		SignUpModalComponent,
		DialogCloseDirective,
		ModalHeaderComponent,
		QrModalComponent,
		ProfilePromoCardsComponent,
		EcoFilterBottomSheetComponent,
		BottomSheetContainerComponent,
		SidebarPanelComponent,
		BottomSheetHeaderComponent,
		MapCardsBottomSheetComponent,
		MapFilterBottomSheetComponent,
  BottomSheetWrapperComponent,
  EcomarketSkeletonComponent,
  ProfileSkeletonComponent,
		BottomSheetWrapperComponent,
  FilterComponent
	],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SwiperModule,
        LeafletModule,
        ReactiveFormsModule,
        DialogModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot({
            timeOut: 1500,
            progressBar: true,
            positionClass: 'toast-bottom-center',
        }),
        NgxSkeletonLoaderModule,
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
