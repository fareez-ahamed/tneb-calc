import { Injectable } from '@angular/core';
import { PriceSlab } from './price-slab';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  unitSlab: PriceSlab[];

  constructor() {
    this.unitSlab = [
      new PriceSlab(100, 0, [
        { minUnit: 1, maxUnit: 100, pricePerUnit: 0 },
      ]),
      new PriceSlab(200, 20, [
        { minUnit: 1, maxUnit: 100, pricePerUnit: 0 },
        { minUnit: 101, maxUnit: 200, pricePerUnit: 1.5 },
      ]),
      new PriceSlab(500, 30, [
        { minUnit: 1, maxUnit: 100, pricePerUnit: 0 },
        { minUnit: 101, maxUnit: 200, pricePerUnit: 2 },
        { minUnit: 201, maxUnit: 500, pricePerUnit: 3 },
      ]),
      new PriceSlab(9999999, 50, [
        { minUnit: 1, maxUnit: 100, pricePerUnit: 0 },
        { minUnit: 101, maxUnit: 200, pricePerUnit: 3.5 },
        { minUnit: 201, maxUnit: 500, pricePerUnit: 4.6 },
        { minUnit: 501, maxUnit: 9999999, pricePerUnit: 6.6 },
      ]),
    ];
  }

  public getBillAmount(units: number): number {
    for (const slab of this.unitSlab) {
      if ( slab.maxUnit >= units ) {
        return slab.calculateTotalAmount(units);
      }
    }
    return 0;
  }
}
