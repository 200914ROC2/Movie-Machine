import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ResultsListComponent,
    ResultCardComponent,
    InfoCardComponent,
    SearchResultsComponent,
    PaginatorComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
