import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePatientComponent } from './save-patient.component';

describe('SavePatientComponent', () => {
  let component: SavePatientComponent;
  let fixture: ComponentFixture<SavePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
