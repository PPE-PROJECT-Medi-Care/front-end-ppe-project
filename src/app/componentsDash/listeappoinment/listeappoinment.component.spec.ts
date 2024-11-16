import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeappoinmentComponent } from './listeappoinment.component';

describe('ListeappoinmentComponent', () => {
  let component: ListeappoinmentComponent;
  let fixture: ComponentFixture<ListeappoinmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeappoinmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
