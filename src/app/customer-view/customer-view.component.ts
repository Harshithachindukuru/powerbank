import { Component, OnInit } from '@angular/core';
import { BuyDataService } from '../buy-data.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  showTable: boolean = false;
  evValue!: number;
  pbData!: any[];
  billValue!: number;

  calculatedValue!: number;

  chosenUnit:string="miles";

  finalValue!: number;
  constructor(public pb:BuyDataService) { 
    
  }
  
  toggleShowTable(): void {
    this.showTable = !this.showTable;
}
  ngOnInit(): void {
    console.log(this.pb.getActivepowerBanks().getValue());
    this.pbData=this.pb.getActivepowerBanks().getValue();
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
  demo(){
    let update={
      cost:2,        
      quantity:100,
      validity:30,
      endDate:"2nd sep 2022"
    }
this.pbData.unshift(update);
this.pb.getActivepowerBanks().next(this.pbData);

}
}