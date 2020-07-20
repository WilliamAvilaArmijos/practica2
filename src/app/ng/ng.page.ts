import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng',
  templateUrl: './ng.page.html',
  styleUrls: ['./ng.page.scss'],
})
export class NgPage implements OnInit {
  policies: Array<any> = [
    {id: 1, name: "policy001"},
    {id: 2, name: "policy002"},
    {id: 3, name: "policy003"},
    {id: 4, name: "policy004"},
    {id: 5, name: "policy005"},
  ];
  constructor() {
    
   }

  ngOnInit() {
  }

}
