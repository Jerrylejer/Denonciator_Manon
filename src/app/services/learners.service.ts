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
  // Je crée un tableau pour intégrer mes absents hommes et un tableau pour les femmes
  men: string[]  = ['Jérôme', 'Erdal', 'Fahed', 'Thomas'];
  absentMen: string[] = [];
  absentWomen: string[] = [];

}
