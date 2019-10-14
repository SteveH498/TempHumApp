import { Component, OnInit } from '@angular/core';

import { TempHumService } from '../service/TempHum.service';

import { Reading } from '../service/Reading'

@Component({
  selector: 'temp-hum-details',
  templateUrl: './temp-hum-details.component.html',
  styleUrls: ['./temp-hum-details.component.css']
})
export class TempHumDetailsComponent implements OnInit {

  latestReading: Reading = {
    temperature: 0,
    humidity: 0,
    timestamp: new Date()
  }; 

  constructor(private tempHumService: TempHumService) { }

  ngOnInit() {
    this.getReadings();
  }


  getReadings(): void {
    this.tempHumService
      .getTodaysTempHumReadings()
      .subscribe(readings => this.latestReading = readings[readings.length - 1]);
  }

}
