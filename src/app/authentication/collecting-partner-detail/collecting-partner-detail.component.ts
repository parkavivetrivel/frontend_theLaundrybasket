import { Component,Input } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatStepperModule} from '@angular/material/stepper';
// import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-collecting-partner-detail',
  templateUrl: './collecting-partner-detail.component.html',
  styleUrl: './collecting-partner-detail.component.css'
})

export class CollectingPartnerDetailComponent {
  map: boolean=false;
  locate: boolean=true;
 confirm:boolean=false;
 edit:boolean=false;
 address:any
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
  callmap(){
   this.map =true
   this.locate=false
   this.confirm=true
   this.edit=false
   this.address = this.currentLocation
  }
  callconfirm(){
    this.confirm=false;
    this.map =false;
    this.edit = true;
  }
  calledit(){
    this.confirm=false;
    this.edit = false;
    this.map =true;
    this.address=""
    this.locate=true

  }

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
  @Input() data: string | undefined;
  setData(b: string) {
    this.data = b
    console.log("child",this.data)
  }
 showStep(stepNumber: number) {
    const steps = document.querySelectorAll('.step');
    const stepContents = document.querySelectorAll('.step-content');

    steps.forEach((step, index) => {
      step.classList.remove('active');
    });

    stepContents.forEach((stepContent, index) => {
      stepContent.classList.remove('active');

      if (index === stepNumber) {
        steps[index].classList.add('active');
        stepContent.classList.add('active');
      }
    });
  }
}
