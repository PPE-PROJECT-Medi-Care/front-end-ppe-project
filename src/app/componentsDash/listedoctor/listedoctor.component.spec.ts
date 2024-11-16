import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedoctorComponent } from './listedoctor.component';

describe('ListedoctorComponent', () => {
  let component: ListedoctorComponent;
  let fixture: ComponentFixture<ListedoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
