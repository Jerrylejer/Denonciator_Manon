import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomLearnersComponent } from './random-learners.component';

describe('RandomLearnersComponent', () => {
  let component: RandomLearnersComponent;
  let fixture: ComponentFixture<RandomLearnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomLearnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomLearnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
