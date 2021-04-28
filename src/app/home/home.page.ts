import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { Locale } from '../../plugins/locale.plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  buildId = environment.buildId;
  countryCode = '';
  error = '';

  constructor(private platform: Platform) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      Locale.getCountryCode().then(({ countryCode }) => {
        this.countryCode = countryCode;
      }).catch((error) => {
        this.error = JSON.stringify(error);
      })
    });
  }
}
