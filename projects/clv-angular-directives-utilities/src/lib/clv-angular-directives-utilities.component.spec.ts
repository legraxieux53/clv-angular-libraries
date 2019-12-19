import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClvAngularDirectivesUtilitiesComponent} from './clv-angular-directives-utilities.component';

describe('ClvAngularDirectivesUtilitiesComponent', () => {
  let component: ClvAngularDirectivesUtilitiesComponent;
  let fixture: ComponentFixture<ClvAngularDirectivesUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClvAngularDirectivesUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClvAngularDirectivesUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
