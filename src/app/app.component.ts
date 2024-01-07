import { NgModule, Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'laundryBasket';
  zoom = 12;
  currentLocation:any;
  center!: google.maps.LatLngLiteral;
  markers: any[] = [];
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  currentLan: any;
  currentLon: any;

  getAddress(lat: number, lng: number) {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Nominatim API Response:', data);
        if (data.address) {
          const address = data.display_name;
          console.log('Address:', address);
          this.currentLocation = address;
          // You can now use the obtained address as needed.
        } else {
          console.error('Unable to fetch address');
        }
      })
      .catch(error => console.error('Error fetching address:', error));
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.currentLan = position.coords.latitude;
      this.currentLon = position.coords.longitude;
      this.markers.push({
        position: {
          lat: this.currentLan,
          lng: this.currentLon,
        },
        label: {
          color: 'pink',
          text: 'My Location',
        },
        title: 'Marker title ' + (this.markers.length + 1),
        options: { animation: google.maps.Animation.BOUNCE },
      });

      // Get the address for the marked location
      this.getAddress(this.currentLan, this.currentLon);
    });
  }
}
