import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient, public _route: Router) {
  }


  postApi(url, data): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.append('content-type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('content-type', 'application/x-www-form-urlencoded')
    headers = headers.append('customer-header', 'custom')
    return this.http.post(environment.baseurl + url, data, { 'headers': headers });
  }

  getApi(url): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.append('content-type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('content-type', 'application/x-www-form-urlencoded')
    headers = headers.append('customer-header', 'custom')
    return this.http.get(environment.baseurl + url, { 'headers': headers });
  }
}
