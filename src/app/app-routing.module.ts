import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'info/:id', component: InfoCardComponent},
  {path: 'search/:searchTerms', component: SearchResultsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
