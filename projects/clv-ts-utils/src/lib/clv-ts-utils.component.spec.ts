import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClvTsUtilsComponent} from './clv-ts-utils.component';

describe('ClvTsUtilsComponent', () => {
  let component: ClvTsUtilsComponent;
  let fixture: ComponentFixture<ClvTsUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClvTsUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClvTsUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
