import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaServiceService {

  constructor() { }
  public obtenerTemperatura(): number {
    return Math.floor((Math.random() * 10) + 1);
  }
}
