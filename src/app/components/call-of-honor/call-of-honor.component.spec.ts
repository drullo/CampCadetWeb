import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOfHonorComponent } from './call-of-honor.component';

describe('CallOfHonorComponent', () => {
  let component: CallOfHonorComponent;
  let fixture: ComponentFixture<CallOfHonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallOfHonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallOfHonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
