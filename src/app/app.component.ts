import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency';
  currjson: any = [];
  base = 'USD'; 
  count2 = 'USD';
result:string ='1';

changebase(a:string)
{
  this.base = a;
  console.log(this.base)
}
tocountry(b:string)
{
  this.count2 = b;
  console.log(this.count2)
}
constructor(private currency: CurrencyapidataService){}
convert()
{
    this.currency.getcurrencydata(this.base).subscribe(data => {
     this.currjson = JSON.stringify(data);
     this.currjson = JSON.parse(this.currjson)
     console.log(this.currjson);
      if(this.count2 == 'USD')
      {
        this.result = this.currjson.rates.USD
      }
      if(this.count2 == 'INR')
      {
        this.result = this.currjson.rates.INR
      }
      if(this.count2 == 'EUR')
      {
        this.result = this.currjson.rates.EUR
      }


   })
  
}
}
