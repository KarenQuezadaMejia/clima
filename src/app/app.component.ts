import { Component, OnInit } from '@angular/core';
import { weatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{
  constructor(public weatherService: weatherService) {

  }
  
  ngOnInit(){
  }



}
