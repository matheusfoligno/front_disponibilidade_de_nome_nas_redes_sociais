import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SitesResponse } from 'src/app/models/sitesResponse';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = 'https://api-checarnomeusuarios.herokuapp.com/api/site/';

  constructor(private httpClient: HttpClient) { }

  public getSitesStatusByUserName(username: string): Observable<SitesResponse[]> {
    return this.httpClient.get<SitesResponse[]>(this.apiUrl + username);
  }
}
