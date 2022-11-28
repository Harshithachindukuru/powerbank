import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  showTable: boolean = false;
  constructor() { 
  }
  toggleShowTable(): void {
    this.showTable = !this.showTable;
}
  ngOnInit(): void {
  }

}
