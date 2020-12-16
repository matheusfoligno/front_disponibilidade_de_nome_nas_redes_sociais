import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { SitesResponse } from './models/sitesResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  sites: SitesResponse[];
  spinner: boolean = false;
  todoValueNoAccents: string;
  disabledButton = true;

  constructor(public appService: AppService) { }

  getSites(username: string) {
    this.spinner = true;
    let noSpace = username.replace(/ /g, '');
    let noAccents = noSpace.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    this.appService.getSitesStatusByUserName(noAccents).subscribe(response => {
      this.sites = response;
      this.spinner = false;
      this.todoValueNoAccents = noAccents;
    });
  }

  changeInput(inputValue: string) {
    if (inputValue.length > 0) {
      this.disabledButton = false;
    } else {
      this.disabledButton = true;
    }
  }
}
