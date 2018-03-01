import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampDatesComponent } from './camp-dates.component';

describe('CampDatesComponent', () => {
  let component: CampDatesComponent;
  let fixture: ComponentFixture<CampDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
