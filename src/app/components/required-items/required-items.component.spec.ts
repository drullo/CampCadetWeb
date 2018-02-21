import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredItemsComponent } from './required-items.component';

describe('RequiredItemsComponent', () => {
  let component: RequiredItemsComponent;
  let fixture: ComponentFixture<RequiredItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
