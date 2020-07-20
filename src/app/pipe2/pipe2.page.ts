import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe2',
  templateUrl: './pipe2.page.html',
  styleUrls: ['./pipe2.page.scss'],
})
export class Pipe2Page implements OnInit {
  PI = Math.PI;
  porcentaje;
  dinero;
  teprometo;
  fecha: number = Date.now();
  personas: Object = {apellido: 'Avila', casado: 'false', direccion: 'Ambato', telefono: '090909090'};
  constructor() { 
    this.porcentaje=10.90;
    this.dinero=100;
  }
  
  ngOnInit() {
  }

}
