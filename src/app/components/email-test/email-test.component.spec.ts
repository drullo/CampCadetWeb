import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTestComponent } from './email-test.component';

describe('EmailTestComponent', () => {
  let component: EmailTestComponent;
  let fixture: ComponentFixture<EmailTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
