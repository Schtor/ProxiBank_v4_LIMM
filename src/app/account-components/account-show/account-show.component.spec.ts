import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountShowComponent } from './account-show.component';

describe('AccountShowComponent', () => {
  let component: AccountShowComponent;
  let fixture: ComponentFixture<AccountShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
