// we will some instructions on how an object can be an argument to the addMarker function
// we will do that by creating an interface
// so a user, company or an object from any class must satisfy that interface 'Mappable' to work with the CustomMap's addMarker method
// we call this an Implicit check, TypeScript (implicitly) behind the scenes is making sure that the user, company has the correct properties with the correct types inside of it to be an argument for addMarker
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  //color: string;
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent();
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}