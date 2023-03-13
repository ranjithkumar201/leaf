
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder";
import * as ELG from "esri-leaflet-geocoder";
//import Geocoder from 'leaflet-control-geocoder';
import {Geocoder, geocoders} from 'leaflet-control-geocoder';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
 declare private map;
  private initMap(): void {
    this.map = L.map('map', {
      //13.0827° N, 80.2707°
      //39.8282,-98.5795
      center: [13.0827, 80.2707],
      zoom: 17
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
//38,95
    tiles.addTo(this.map);
    var myIcon = L.icon({
      iconUrl: '/assets/redbus.png',
      iconSize: [50, 115],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      //shadowUrl: 'my-icon-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
  });
  
  L.marker([13.0827, 80.2707], {icon: myIcon}).addTo(this.map);
  //esri
  new Geocoder({
    geocoder: new geocoders.Nominatim(),
    position: 'topright',
  }).addTo(this.map);
 
}

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}