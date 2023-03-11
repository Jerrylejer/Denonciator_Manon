import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RandomLearnersComponent } from './components/random-learners/random-learners.component';
import { AbsenceSelectionComponent } from './components/absence-selection/absence-selection.component';
import { AbsenceDisplayComponent } from './components/absence-display/absence-display.component';
import { RandomComponent } from './pages/random/random.component';
import { AbsencesComponent } from './pages/absences/absences.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RandomLearnersComponent,
    AbsenceSelectionComponent,
    AbsenceDisplayComponent,
    RandomComponent,
    AbsencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
