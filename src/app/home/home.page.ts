import { Component, OnInit} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

/**
 * @author Joni-Pekka Vesto <https://www.jonivesto.com/>
 * @since 25-03-2019
 */

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private geolocation: Geolocation) {}

  // Run on page load
  ngOnInit(){
    // Get current location
    this.geolocation.getCurrentPosition().then((response) => {
      // Print response
      console.log('Latitude: ', response.coords.latitude);
      console.log('Longitude: ', response.coords.longitude);
      // Handle errors
    }).catch((error) => {
      console.error(error);
    });
  }

}
