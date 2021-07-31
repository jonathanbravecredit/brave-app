import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCreditMixAccountsComponent } from './collection-credit-mix-accounts.component';

describe('CollectionCreditMixAccountsComponent', () => {
  let component: CollectionCreditMixAccountsComponent;
  let fixture: ComponentFixture<CollectionCreditMixAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionCreditMixAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCreditMixAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
