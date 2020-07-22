import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

    output;
    firstNum;
    secondNum;
    operator = '+';

    onFirstChange(value): void {
        this.firstNum = Number(value);
    }

    onSecondChange(value): void {
        this.secondNum = Number(value);
    }

    calculate(): void {
        switch (this.operator) {
            case '+':
                this.output = this.firstNum + this.secondNum;
                break;
            case '-':
                this.output = this.firstNum - this.secondNum;
                break;
            case '*':
                this.output = this.firstNum * this.secondNum;
                break;
            case '/':
                this.output = this.firstNum / this.secondNum;
                break;

        }
    }

    onSelectChange(value): void {
        this.operator = value;
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
