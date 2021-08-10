import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycKbaquestionsPureComponent } from './kyc-kbaquestions-pure.component';

describe('KycKbaquestionsPureComponent', () => {
  let component: KycKbaquestionsPureComponent;
  let fixture: ComponentFixture<KycKbaquestionsPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycKbaquestionsPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycKbaquestionsPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
