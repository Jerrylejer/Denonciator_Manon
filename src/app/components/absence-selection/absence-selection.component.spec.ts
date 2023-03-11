import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceSelectionComponent } from './absence-selection.component';

describe('AbsenceSelectionComponent', () => {
  let component: AbsenceSelectionComponent;
  let fixture: ComponentFixture<AbsenceSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsenceSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
