import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFormPageComponent } from './calendar-form-page.component';

describe('CalendarFormPageComponent', () => {
  let component: CalendarFormPageComponent;
  let fixture: ComponentFixture<CalendarFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarFormPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
