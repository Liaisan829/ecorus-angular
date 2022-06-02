import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HistoryModel, MockHistory } from '../mocks/history-mock';


@Injectable({
	providedIn: 'root'
})
export class HistoryService {
	history$: BehaviorSubject<Array<HistoryModel>> = new BehaviorSubject<Array<HistoryModel>>(MockHistory);

	constructor() {
	}
}
