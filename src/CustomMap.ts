//import { User } from './User'; // to refer to the user type and use it for annotation
//import { Company } from './Company';


// we will some instructions on how an object can be an argument to the addMarker function
// we will do that by creating an interface
// so a user, company or an object from any class must satisfy that interface 'Mappable' to work with the CustomMap's addMarker method
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}

export class CustomMap {
  private googleMap: google.maps.Map; // we can not reference this property from outside this class

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}