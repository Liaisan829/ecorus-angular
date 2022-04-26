import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';
import { MainComponent } from '@pages/main/main.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'ecomarket',
		component: EcomarketComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
