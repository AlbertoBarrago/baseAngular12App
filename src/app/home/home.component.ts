import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test: string = "Portfolio";
  results: any = {};
  resultsLoaded: boolean = false;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo = () => {
    this.homeService.getConfig().subscribe({
      next: event => this.results = { results: event.results},
      error: err => console.log(`Oops... ${err}`),
      complete: () => this.resultsLoaded = true,
    });
  }

}
