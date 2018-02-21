import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationComponent } from './preparation.component';

describe('PreparationComponent', () => {
  let component: PreparationComponent;
  let fixture: ComponentFixture<PreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
