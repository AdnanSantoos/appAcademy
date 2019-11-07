import { Component } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: Map;
  locais: any;
  propertyList = [];
  constructor() {}
  ionViewDidEnter() {
    this.map = new Map('mapId').setView([42.35663, -71.1109], 16);

    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'Smart Gym'
    }).addTo(this.map);

    fetch('../../assets/json/data.json').then(res => res.json())
    .then(json => {
      this.propertyList = json.properties;
      this.leafletMap();
    });
  }

  leafletMap() {
    for (const property of this.propertyList) {
      marker([property.long, property.lat]).addTo(this.map)
        .bindPopup('<img src="../../assets/images/'+property.logo+'"/> <div class="academia"> <div>A partir de:</br></div><b>'+property.valor+'</b></div>')
        .openPopup();
    }
  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
