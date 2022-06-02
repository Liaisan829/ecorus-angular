import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MockCollPoints } from '../mocks/collectionPoint-mock';
import { CollPoint } from '@models/coll-point';

@Injectable({
	providedIn: 'root'
})
export class CollPointsService {
	collPoints$: BehaviorSubject<Array<CollPoint>> = new BehaviorSubject<Array<CollPoint>>(MockCollPoints);
}

