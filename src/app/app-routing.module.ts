import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'info/:id', component: InfoCardComponent},
  {path: 'search/:searchTerms', component: SearchResultsComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
