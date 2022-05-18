import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@models/user';
import { PromoCard } from '@models/promocard';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {

	constructor(private http: HttpClient) {
	}

	getProfile(): Observable<User> {
		return this.http.get<User>('profile');
	}

	getUserBalance(): Observable<number>{
		return this.http.get<number>('profile/balance');
	}
	
	getUserPromoCards(): Observable<PromoCard[]>{
		return this.http.get<PromoCard[]>('promo-codes/eco-rus/api/v1/promo-codes');
	}
}
