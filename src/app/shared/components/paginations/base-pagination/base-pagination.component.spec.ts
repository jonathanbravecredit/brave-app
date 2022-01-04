import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BasePaginationComponent } from "./base-pagination.component";
import { BasePaginationPipe } from "./base-pagination.pipe";

describe("BasePaginationComponent", () => {
  let component: BasePaginationComponent;
  let fixture: ComponentFixture<BasePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasePaginationComponent, BasePaginationPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
