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
import { MainComponent } from '@pages/main/main.component';
import { SortingButtonsComponent } from './components/containers/sorting-buttons/sorting-buttons.component';

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
  SortingButtonsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
