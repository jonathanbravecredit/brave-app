import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';

import { PersonalitemsPureView } from './personalitems-pure.view';

describe('PersonalitemsPureView', () => {
  let component: PersonalitemsPureView;
  let fixture: ComponentFixture<PersonalitemsPureView>;
  let featureFlagMock: any;

  beforeEach(async () => {
    featureFlagMock = jasmine.createSpyObj('FeatureFlagsService', ['']);
    await TestBed.configureTestingModule({
      declarations: [PersonalitemsPureView],
      providers: [{ provide: FeatureFlagsService, useValue: featureFlagMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitemsPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
