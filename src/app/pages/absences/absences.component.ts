import { Component } from '@angular/core';
import { LEARNERS, Learners } from 'src/app/mocks/learners.mock';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent {

  learners: Learners[] = LEARNERS;
}
