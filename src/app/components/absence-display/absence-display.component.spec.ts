import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceDisplayComponent } from './absence-display.component';

describe('AbsenceDisplayComponent', () => {
  let component: AbsenceDisplayComponent;
  let fixture: ComponentFixture<AbsenceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsenceDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
