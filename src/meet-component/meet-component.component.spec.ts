import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetComponentComponent } from './meet-component.component';

describe('MeetComponentComponent', () => {
  let component: MeetComponentComponent;
  let fixture: ComponentFixture<MeetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
