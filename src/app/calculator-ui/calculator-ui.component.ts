import { Component, OnInit } from '@angular/core';
import { TariffService } from '../tariff.service';

@Component({
  selector: 'app-calculator-ui',
  templateUrl: './calculator-ui.component.html',
  styleUrls: ['./calculator-ui.component.css']
})
export class CalculatorUIComponent implements OnInit {

  amount = 0;
  units = 0;

  constructor(private tariff: TariffService) {
    this.tariff = tariff;
  }

  ngOnInit() {
  }

  calculate() {
    this.amount = this.tariff.getBillAmount(this.units);
  }

}
