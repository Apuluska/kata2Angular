import { Component, OnInit, Input } from '@angular/core';
import { Ciudad } from '../ciudad/ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.sass']
})
export class CiudadesComponent implements OnInit {
  @Input() public ciudades: Array<Ciudad>;


  constructor() { }

  ngOnInit() {
  }

}
