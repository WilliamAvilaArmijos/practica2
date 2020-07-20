import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name = 'Interpolación';
  img = 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=';
  nombre:string;
  edad:number;
  
	
	constructor() {}
	
	ngOnInit() {
	}

}
