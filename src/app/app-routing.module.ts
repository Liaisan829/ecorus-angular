import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';
import { MainComponent } from '@pages/main/main.component';
import { MapPageComponent } from '@pages/map-page/map-page.component';
import { ProfileComponent } from '@pages/profile/profile.component';
import { PromoCardComponent } from '@components/cards/promo-card/promo-card.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';
import { AuthenticationGuard } from '@guards/auth.guard';

const profileRoutes: Routes = [
	{ path: 'promocode', component: PromoCardComponent },
	{ path: 'history', component: HistoryCardComponent }
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
		component: MapPageComponent
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
