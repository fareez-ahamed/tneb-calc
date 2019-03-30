import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorUIComponent } from './calculator-ui.component';

describe('CalculatorUIComponent', () => {
  let component: CalculatorUIComponent;
  let fixture: ComponentFixture<CalculatorUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
