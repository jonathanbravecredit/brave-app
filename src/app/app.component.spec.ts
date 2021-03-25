import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DOMHelper } from 'src/app/testing/dom-helper';
import { Helper } from 'src/app/testing/test-helper';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dh: DOMHelper<AppComponent>;
  let h: Helper<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dh = new DOMHelper(fixture);
    h = new Helper(component);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'brave-app'`, () => {
    expect(component.title).toEqual('brave-app');
  });

  it('should render title', () => {
    expect(dh.querySelector('.content span')).toContain(
      'brave-app app is running!'
    );
  });
});
