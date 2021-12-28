import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DecodePipe } from "@shared/pipes/decode/decode.pipe";

import { DisputeHeaderPublicitemComponent } from "./dispute-header-publicitem.component";

describe("DisputeHeaderPublicitemComponent", () => {
  let component: DisputeHeaderPublicitemComponent;
  let fixture: ComponentFixture<DisputeHeaderPublicitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisputeHeaderPublicitemComponent, DecodePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeHeaderPublicitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
