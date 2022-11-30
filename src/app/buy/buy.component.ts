import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  quantity!: number;
  capacity!: number;
  unit!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
