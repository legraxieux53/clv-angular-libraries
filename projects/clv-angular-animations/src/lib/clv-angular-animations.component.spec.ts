import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClvAngularAnimationsComponent} from './clv-angular-animations.component';

describe('ClvAngularAnimationsComponent', () => {
  let component: ClvAngularAnimationsComponent;
  let fixture: ComponentFixture<ClvAngularAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClvAngularAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClvAngularAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
