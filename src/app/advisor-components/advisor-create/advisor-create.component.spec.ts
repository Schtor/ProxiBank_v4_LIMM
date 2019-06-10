import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorCreateComponent } from './advisor-create.component';

describe('AdvisorCreateComponent', () => {
  let component: AdvisorCreateComponent;
  let fixture: ComponentFixture<AdvisorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
