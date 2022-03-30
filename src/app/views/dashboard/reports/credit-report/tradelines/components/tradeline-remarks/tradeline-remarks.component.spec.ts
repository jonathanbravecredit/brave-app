import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';

import { TradelineRemarksComponent } from './tradeline-remarks.component';

describe('TradelineRemarksComponent', () => {
  let component: TradelineRemarksComponent;
  let fixture: ComponentFixture<TradelineRemarksComponent>;
  let featureFlagsMock: any;

  beforeEach(async () => {
    featureFlagsMock = jasmine.createSpyObj('FeatureFlagsService', ['']);
    await TestBed.configureTestingModule({
      declarations: [TradelineRemarksComponent],
      providers: [{ provide: FeatureFlagsService, useValue: featureFlagsMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
