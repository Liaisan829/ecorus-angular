import { Component } from '@angular/core';
import { latLng, tileLayer, Map } from 'leaflet';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
})
export class MapComponent {

	optionsSpec: any = {
		layers: [{ url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map' }],
		zoom: 13,
		center: [55.792910, 49.122429],
		scrollWheelZoom: false
	};

	zoom = this.optionsSpec.zoom;
	center = latLng(this.optionsSpec.center);
	options = {
		layers: [tileLayer(this.optionsSpec.layers[0].url, { attribution: this.optionsSpec.layers[0].attribution })],
		zoom: this.optionsSpec.zoom,
		center: latLng(this.optionsSpec.center)
	};

	onMapReady(map: Map) {
		map.scrollWheelZoom = map.scrollWheelZoom.disable()
	}
}
