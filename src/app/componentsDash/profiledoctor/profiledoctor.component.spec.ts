import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledoctorComponent } from './profiledoctor.component';

describe('ProfiledoctorComponent', () => {
  let component: ProfiledoctorComponent;
  let fixture: ComponentFixture<ProfiledoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiledoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
