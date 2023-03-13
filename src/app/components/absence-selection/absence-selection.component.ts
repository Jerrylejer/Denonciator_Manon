import { Component, Input } from '@angular/core';
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
  @Input() element: Learners[] = LEARNERS;
  // Je récupère mon ngModel
  selected = '';

  // Je récupère mon service
  constructor(private learnersService: LearnersService) {}

  ngOnInit() {
    this.learnersService.firstnameList();
    this.learnersService.purgedList();
  }

  onSubmitForm() {
    // Je récupère bien la valeur du [(ngModel)]="selected"
    console.log(this.selected);
    // Je sépare les absences suivant le genre
    if (
      this.learnersService.men.includes(this.selected) &&
      !this.learnersService.absentMen.includes(this.selected)
    ) {
      this.learnersService.absentMen.push(this.selected);
    } else if (
      !this.learnersService.men.includes(this.selected) &&
      !this.learnersService.absentWomen.includes(this.selected)
    ) {
      this.learnersService.absentWomen.push(this.selected);
    }
    // Je push également toutes les absences dans un seul et même tableau absents
    this.learnersService.absents.push(this.selected);
    // J'actualise ma liste purgée des absents
    this.learnersService.purgedList();
    // je vérifie le contenu de mes tableau dans mon service
    console.log(this.learnersService.absentMen);
    console.log(this.learnersService.absentWomen);
    console.log(this.learnersService.absents);
  }
}
