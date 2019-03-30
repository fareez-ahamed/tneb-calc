import { TargetLocator } from 'selenium-webdriver';

export class PriceSlab {

  maxUnit: number;

  fixedCharge: number;

  tariff: {
    minUnit: number,
    maxUnit: number,
    pricePerUnit: number
  }[];

  constructor(maxUnit: number, fixedCharge: number, tariff: {
    minUnit: number,
    maxUnit: number,
    pricePerUnit: number
  }[]) {
    this.maxUnit = maxUnit;
    this.fixedCharge = fixedCharge;
    this.tariff = tariff;
  }

  /**
   * calculateAmount
   */
  public calculateTotalAmount(units: number) {

    let amount = 0;
    let tempUnits = units;
    let tariffIndex = 0;

    amount += this.fixedCharge;

    while ( tempUnits > 0 ) {
      const maxUnitsInCurrSlab = ( this.tariff[tariffIndex].maxUnit - this.tariff[tariffIndex].minUnit + 1 );
      const unitsInCurrSlab = maxUnitsInCurrSlab > tempUnits ? tempUnits : maxUnitsInCurrSlab;
      amount += unitsInCurrSlab * this.tariff[tariffIndex].pricePerUnit;
      tempUnits -= unitsInCurrSlab;
      tariffIndex++;
    }

    return amount;
  }

}
