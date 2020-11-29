import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SitesResponse } from 'src/app/model/sitesResponse';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = 'http://localhost:8080/api/site/';

  constructor(private httpClient: HttpClient) { }

  public getSitesStatusByUserName(username: string): Observable<SitesResponse[]> {
    return this.httpClient.get<SitesResponse[]>(this.apiUrl + username);
  }
}
