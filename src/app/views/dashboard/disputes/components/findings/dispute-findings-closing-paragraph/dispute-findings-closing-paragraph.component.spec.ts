import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkifyPipe } from '@shared/pipes/linkify/linkify.pipe';

import { DisputeFindingsClosingParagraphComponent } from './dispute-findings-closing-paragraph.component';

describe('DisputeFindingsClosingParagraphComponent', () => {
  let component: DisputeFindingsClosingParagraphComponent;
  let fixture: ComponentFixture<DisputeFindingsClosingParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsClosingParagraphComponent, LinkifyPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsClosingParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
