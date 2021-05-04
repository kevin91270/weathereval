import { Component, Output, EventEmitter} from '@angular/core';

import { WeatherdataService } from '../../services/weatherdata.service'
import { Weather } from '../../app.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()

  weather: Weather = new Weather()
  city: String = ""

  constructor(private weatherData: WeatherdataService) { }

  submit() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city = data['name']
      this.weather.conditions = data['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15))
      this.weather.temp_max = Math.round((data['main']['temp_max'] - 273.15))
      this.weather.temp_min = Math.round((data['main']['temp_min'] - 273.15))
      this.weather.humidity = Math.round((data['main']['humidity'] - 273.15))
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.weather.wind = data['wind']['speed']


      this.onSelection.emit(this.weather)
    })
  }

}
