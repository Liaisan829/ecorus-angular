import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';
import { MainComponent } from '@pages/main/main.component';
import { MapPageComponent } from '@pages/map-page/map-page.component';
import { ProfileComponent } from '@pages/profile/profile.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';
import { AuthenticationGuard } from '@guards/auth.guard';
import { ProfilePromoCardsComponent } from '@containers/profile-promo-cards/profile-promo-cards.component';
import { FullMapCardComponent } from '@components/cards/collectionPointsCards/full-map-card/full-map-card.component';

const profileRoutes: Routes = [
	{ path: 'promocode', component: ProfilePromoCardsComponent },
	{ path: 'history', component: HistoryCardComponent }
]

const mapPageRoutes: Routes = [
	{ path: ':id', component: FullMapCardComponent, pathMatch: 'full' }
]

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'ecomarket',
		component: EcomarketComponent
	},
	{
		path: 'collpoints',
		component: MapPageComponent,
		children: mapPageRoutes
	},
	{
		path: 'profile',
		component: ProfileComponent,
		canActivate: [AuthenticationGuard],
		children: profileRoutes
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
