import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '@utils/local-storage';
import { Observable } from 'rxjs';

interface AuthParams{
	login: string;
	password: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	@LocalStorage() user?: any | null;
	@LocalStorage() token?: string | null;

	constructor(private http: HttpClient) {
	}

	authorize(credentials: AuthParams): Observable<any>{
		return this.http.post('login', credentials);
	}
}