import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {

  nota:number;
  asignatura:string;
  edad:number;

  constructor() { 
    this.asignatura="matematicas";
    this.nota=9;
    this.edad=16;

  }

  ngOnInit() {
  }

}
