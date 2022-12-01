import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyDataService {
  powerBankData: any[]=[
    {
      cost:1,        
      quantity:10,
      validity:30,
      endDate:"2022-08-4"
    },
    {
      cost:1,        
      quantity:10,
      validity:30,
      endDate:"2022-08-4"
    },
    {
      cost:1,        
      quantity:10,
      validity:30,
      endDate:"2022-07-19"
    },
    {
      cost:1,        
      quantity:10,
      validity:30,
      endDate:"2022-08-04"
    }
  ]
activePowerBanks=new BehaviorSubject(this.powerBankData);
  constructor() { }
getActivepowerBanks(){
  return this.activePowerBanks;
}
}
