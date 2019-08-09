import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindernoteComponent } from './remindernote.component';

describe('RemindernoteComponent', () => {
  let component: RemindernoteComponent;
  let fixture: ComponentFixture<RemindernoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindernoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindernoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
