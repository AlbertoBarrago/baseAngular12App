import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private configUrl = 'https://randomuser.me/api';
  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<any>(this.configUrl).pipe(
        tap( // Log the result or error
            data => console.log(data.results[0]),
            error => console.error(error)
        )
    );;
  }
}
