import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsCampCadetComponent } from './what-is-camp-cadet.component';

describe('WhatIsCampCadetComponent', () => {
  let component: WhatIsCampCadetComponent;
  let fixture: ComponentFixture<WhatIsCampCadetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsCampCadetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsCampCadetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
