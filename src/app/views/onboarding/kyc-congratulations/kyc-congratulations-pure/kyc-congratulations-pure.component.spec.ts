import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycCongratulationsPureComponent } from './kyc-congratulations-pure.component';

describe('KycCongratulationsPureComponent', () => {
  let component: KycCongratulationsPureComponent;
  let fixture: ComponentFixture<KycCongratulationsPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycCongratulationsPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycCongratulationsPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
