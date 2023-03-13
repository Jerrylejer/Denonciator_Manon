import { Component } from '@angular/core';
import { LearnersService } from 'src/app/services/learners.service';

@Component({
  selector: 'app-absence-display',
  templateUrl: './absence-display.component.html',
  styleUrls: ['./absence-display.component.css'],
})
export class AbsenceDisplayComponent {

  constructor(public learnersService: LearnersService) {}

  ngOnInit() {
  }

  deleteAbsentMen(i: any) {
    this.learnersService.absentMen.splice(i, 1);
  }

  deleteAbsentWomen(i: any) {
    this.learnersService.absentWomen.splice(i, 1);
  }
}
