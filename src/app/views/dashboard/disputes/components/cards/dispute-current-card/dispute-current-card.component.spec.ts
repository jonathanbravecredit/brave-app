import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DisputeCardStatusPipe } from "..";

import { DisputeCurrentCardComponent } from "./dispute-current-card.component";

describe("DisputeCurrentCardComponent", () => {
  let component: DisputeCurrentCardComponent;
  let fixture: ComponentFixture<DisputeCurrentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisputeCurrentCardComponent, DisputeCardStatusPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeCurrentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
