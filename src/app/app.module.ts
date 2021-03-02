import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBar } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MoviesComponent } from './movies/movies.component';
import { NewsComponent } from './news/news.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent, //declares the app component so angular can locate its selector
    NavBar,
    WelcomeComponent,
    ErrorpageComponent,
    MoviesComponent,
    NewsComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule, //makes it runs correctly in the browser
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'news', component: NewsComponent },
      { path: 'reactiveform', component: ReactiveformComponent },
      { path: 'errorpage', component: ErrorpageComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'errorpage', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent], //lists our app component as starting component for our application
})
export class AppModule {}
