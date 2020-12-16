import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SitesResponse } from 'src/app/models/sitesResponse';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  public getSitesStatusByUserName(username: string): Observable<SitesResponse[]> {
    return this.httpClient.get<SitesResponse[]>(environment.url + username);
  }
}
