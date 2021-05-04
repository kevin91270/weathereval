import { Component, OnInit } from '@angular/core';
import { Weather } from '../../app.component'

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent{

  weather: Weather = {
    city: "",
    conditions: "-",
    temperature: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    icon: "",
    wind: 0
  }

  update(weather: Weather) {
    this.weather = weather
  }

}
