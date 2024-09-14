import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'string-calculator';
  inputString: string = '';
  result: number | string = '';
  negativeNumbers:any = [];



    calculateSum(): void {
      if (!this.inputString) {
        this.result = 0;
              return;
      }
      this.result = this.add(this.inputString);
    }

    add(numbers: string){
      this.negativeNumbers = [];
    const numbersArray = numbers.match(/-?\d+/g);
    if (!numbersArray) {
        return 0;
    }

      const sum = numbersArray.reduce((total, num) => {
          const number = +num;
          if (number < 0) {
              this.negativeNumbers.push(number);
          }
          return total + number;
      }, 0);

      const negativeNumbersString = this.negativeNumbers.length > 0
          ? "Negative numbers not allowed "+ this.negativeNumbers.join(', ')
          : 'None';

        return this.negativeNumbers.length > 0 ? negativeNumbersString : sum;

  }
}
