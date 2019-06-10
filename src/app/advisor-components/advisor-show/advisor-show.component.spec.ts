import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorShowComponent } from './advisor-show.component';

describe('AdvisorShowComponent', () => {
  let component: AdvisorShowComponent;
  let fixture: ComponentFixture<AdvisorShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
