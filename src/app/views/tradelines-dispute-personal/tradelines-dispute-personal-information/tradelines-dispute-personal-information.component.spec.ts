import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinesDisputePersonalInformationComponent } from './tradelines-dispute-personal-information.component';

describe('TradelinesDisputePersonalInformationComponent', () => {
  let component: TradelinesDisputePersonalInformationComponent;
  let fixture: ComponentFixture<TradelinesDisputePersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinesDisputePersonalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinesDisputePersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
