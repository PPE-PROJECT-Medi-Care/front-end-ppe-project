import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacedoctorComponent } from './interfacedoctor.component';

describe('InterfacedoctorComponent', () => {
  let component: InterfacedoctorComponent;
  let fixture: ComponentFixture<InterfacedoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacedoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
