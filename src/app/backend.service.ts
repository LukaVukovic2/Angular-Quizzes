import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl: string | undefined;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getItems() {
    console.log(this.apiUrl)
    return this.http.get<any[]>(this.apiUrl);
  }
}
