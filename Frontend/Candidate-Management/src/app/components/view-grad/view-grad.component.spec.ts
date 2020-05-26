import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGradComponent } from './view-grad.component';

describe('ViewGradComponent', () => {
  let component: ViewGradComponent;
  let fixture: ComponentFixture<ViewGradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
