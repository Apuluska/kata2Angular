import { Component, OnInit, Input } from '@angular/core';
import { Ciudad } from './ciudad';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.sass']
})
export class CiudadComponent {
  @Input() ciudad: Ciudad;

  constructor() { }


}
