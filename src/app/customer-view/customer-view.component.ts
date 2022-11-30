import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  showTable: boolean = false;
  evValue!: number;

  billValue!: number;

  calculatedValue!: number;

  chosenUnit:string="miles";

  finalValue!: number;
  constructor() { 
  }
  
  toggleShowTable(): void {
    this.showTable = !this.showTable;
}
  ngOnInit(): void {
  }
  chooseUnit(e:any){

    this.chosenUnit=e.target.value

  }

  calculateRequirement(){
    if(this.evValue==undefined){
      this.evValue=0;
    
    }
    if(this.billValue==undefined){
      this.billValue=0;
    
    }
    console.log(this.evValue);
    console.log(this.billValue);
    let calculatedValue;

  

    if(this.chosenUnit=="kms"){

      calculatedValue=this.evValue*25

    }else{

        calculatedValue=this.evValue/5

      }
    this.finalValue = Math.round((calculatedValue+this.billValue)/25);

  }
}
