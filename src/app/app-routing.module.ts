import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';

const routes: Routes = [
	// {
	// 	path: '',
	// 	component: AppComponent
	// },
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
