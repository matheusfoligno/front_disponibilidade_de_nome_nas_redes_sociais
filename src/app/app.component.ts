import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SitesResponse } from './model/sitesResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'front-nomedeusuariosdisponiveis';

  sites: SitesResponse[];

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.getSites('lallalaalal232131212lll');
  }

  getSites(username: string) {
    let noSpace = username.replace(/ /g, '');
    let noAccents = noSpace.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    this.appService.getSitesStatusByUserName(noAccents).subscribe(response => {
      this.sites = response;
      console.log(this.sites);
    });
  }
}
