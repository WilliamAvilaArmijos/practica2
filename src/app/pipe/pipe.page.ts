import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.page.html',
  styleUrls: ['./pipe.page.scss'],
})
export class PipePage implements OnInit {
  nombre: String;
  libro: String;
  collection: string[] = ['a', 'b', 'c', 'd'];
  constructor() {
    this.nombre='William';
    this.libro="Chocolate caliente para el alma";
   }

  ngOnInit() {
  }

}
