import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {
  persona:HomePage;
  constructor() { 
  this.persona= new HomePage();
	this.persona.nombre="gema";
  this.persona.edad=20;

  }

  ngOnInit() {
  }

}
