import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinesDisputePersonalInformationPureComponent } from './tradelines-dispute-personal-information-pure.component';

describe('TradelinesDisputePersonalInformationPureComponent', () => {
  let component: TradelinesDisputePersonalInformationPureComponent;
  let fixture: ComponentFixture<TradelinesDisputePersonalInformationPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinesDisputePersonalInformationPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinesDisputePersonalInformationPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
