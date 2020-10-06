import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API URL
  baseURL = "any";
  constructor(private httpClient: HttpClient) { }

  public signUp(data) {

    var headers = {
      'Authorization': "token",
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    return this.httpClient.post(this.baseURL + "endPOint", data, { headers: headers });
  }
}
