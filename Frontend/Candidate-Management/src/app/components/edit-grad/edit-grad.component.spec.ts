import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGradComponent } from './edit-grad.component';

describe('EditGradComponent', () => {
  let component: EditGradComponent;
  let fixture: ComponentFixture<EditGradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
