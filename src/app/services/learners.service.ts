import { Injectable } from '@angular/core';
import { LEARNERS, Learners } from '../mocks/learners.mock';

@Injectable({
  providedIn: 'root',
})
export class LearnersService {
  // Je mets en props mon mocks
  learnersArray: Learners[] = LEARNERS;
  // J'accède aux props d'un learner
  learner!: Learners;
  // Une référence pour comparer l'option selected avec mes prénoms "homme" et pusher ensuite correctement
  men: string[]  = ['Jérôme', 'Erdal', 'Fahed', 'Thomas'];
  // Je crée un tableau pour intégrer mes absents hommes et un tableau pour les femmes
  absentMen: string[] = [];
  absentWomen: string[] = [];
}
