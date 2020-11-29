import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SitesResponse } from './model/sitesResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'front-nomedeusuariosdisponiveis';

  userName: string;
  sites: SitesResponse[];
  spinner: boolean = false;
  todoValueNoAccents: string;

  constructor(public appService: AppService) { }

  getSites(username: string) {
    this.spinner = true;
    let noSpace = username.replace(/ /g, '');
    let noAccents = noSpace.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    this.appService.getSitesStatusByUserName(noAccents).subscribe(response => {
      console.log(response);
      this.sites = response;
      this.spinner = false;
      this.todoValueNoAccents = noAccents;
    });
  }
}
