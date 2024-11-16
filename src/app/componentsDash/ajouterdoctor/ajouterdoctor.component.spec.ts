import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterdoctorComponent } from './ajouterdoctor.component';

describe('AjouterdoctorComponent', () => {
  let component: AjouterdoctorComponent;
  let fixture: ComponentFixture<AjouterdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
