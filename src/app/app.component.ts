import { Component } from '@angular/core';
import { Ciudad } from './ciudad/ciudad';
import { TemperaturaServiceService } from './temperatura-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kata2';
  public ciudades: Array <Ciudad> = [];
  constructor( private apiTemperatura: TemperaturaServiceService) { }

  public agregarCiudad(nuevoNombre: string): void {
    this.ciudades.push({
      nombre: nuevoNombre,
      temperatura: this.apiTemperatura.obtenerTemperatura()
      });
  }

}
