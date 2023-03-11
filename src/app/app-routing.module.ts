import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomLearnersComponent } from './components/random-learners/random-learners.component';
import { AbsencesComponent } from './pages/absences/absences.component';
import { RandomComponent } from './pages/random/random.component';

const routes: Routes = [
  {
    path: "",
    component: RandomComponent
  },
  {
    path: "absences",
    component: AbsencesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
