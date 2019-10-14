import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Reading } from '../service/Reading';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TempHumService {

  tempHumService = "/api/readings/today";

  constructor(private http: HttpClient) {}

  getTodaysTempHumReadings(): Observable<Reading[]>{
    return this.http.get(this.tempHumService).pipe(
      map((readings: any[][]) => readings.map((item: any) => 
      <Reading>{ 
        temperature: item[1],
        humidity: item[2],
        timestamp: new Date(`${item[3]} GMT`)
      } ))
    );
  }


}