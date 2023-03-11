import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LEARNERS, Learners } from 'src/app/mocks/learners.mock';
import { LearnersService } from 'src/app/services/learners.service';

@Component({
  selector: 'app-absence-selection',
  templateUrl: './absence-selection.component.html',
  styleUrls: ['./absence-selection.component.css'],
})
export class AbsenceSelectionComponent {

  LearnersList: Learners[] = LEARNERS;
  // Je récupère les datas communiquée par le parent avec @input
  @Input()element:Learners[] = LEARNERS;
  // Je récupère mon ngModel
  selected = "";

  // Je récupère mon service
  constructor(private learnersService: LearnersService) {}

  ngOnInit() {
  }

  onSubmitForm() {
    // Je récupère la valeur du [(ngModel)]="selected"
    console.log(this.selected);
    if(this.learnersService.men.includes(this.selected) 
    && !this.learnersService.absentMen.includes(this.selected)) {
      this.learnersService.absentMen.push(this.selected);
    }
    else if (!this.learnersService.men.includes(this.selected)
    && !this.learnersService.absentWomen.includes(this.selected) ) {
        this.learnersService.absentWomen.push(this.selected);
      };
    // je push mes absents dans mon absents[] du learners.service
    console.log(this.learnersService.absentMen);
    console.log(this.learnersService.absentWomen);
  }
}
