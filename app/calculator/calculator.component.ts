import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {


  userInput:string='';
 

  onClickButton(input:string):void{
    
   if (input === '='){

    this.userInput=eval(this.userInput).toString();

   }else if(input === 'DEL'){

    this.userInput=this.userInput.slice(0,this.userInput.length-1);

   }else if (input === 'AC'){
    this.userInput='';
   }else{
    this.userInput+=input;
   }
   
   
  }


}
