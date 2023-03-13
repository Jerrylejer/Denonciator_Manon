import { Injectable } from '@angular/core';
import { LEARNERS, Learners } from '../mocks/learners.mock';

@Injectable({
  providedIn: 'root',
})
export class LearnersService {
  //todo JE COMMUNIQUE MES DATAS VIA MON SERVCIE
  // le mock
  learnersArray: Learners[] = LEARNERS;
  // Un apprenant
  learners!: Learners;
  // Ma liste des prénoms
  firstname: any[] = [];
  // Ma liste des prénoms purgée des absents
  filteredListFromAbsent: any[] = [];


  //* MES SHARED DATAS 
  // Ma référence pour comparer [(ngMode)]="selected" avec mes prénoms "homme" et pusher correctement
  men: string[] = ['Jérôme', 'Erdal', 'Fahed', 'Thomas'];
  // Je crée un tableau pour mes absents hommes et un  pour les femmes
  absentMen: any[] = [];
  absentWomen: any[] = [];
  // Je créé un tableau qui mutualise toutes les absences - absentMen, absentWomen
  absents: any[] = [];


  //* MES METHODES
  //todo Je récupère seulement les prénoms de mon mock dans "firstname"
  firstnameList() {
    let i;
    for(i = 0; i < this.learnersArray.length; i++){
      // console.log(this.learnersArray[i].firstname)
      this.firstname.push(this.learnersArray[i].firstname);
      console.log(this.firstname);
    }
  }

  //todo Je récupère mon tableau "firstname" purgé des absents sélectionnés
  purgedList() {
    this.filteredListFromAbsent = this.firstname.filter((absent) =>
      !this.absents.includes(absent));
      console.log(this.filteredListFromAbsent);
  }

}
