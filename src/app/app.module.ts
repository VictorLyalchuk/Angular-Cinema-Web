import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditMovieComponent } from './components/movies/edit-movie/edit-movie.component';
import { LoginComponent } from './components/account/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieCardComponent,
    MovieListComponent,
    HomeComponent,
    Error404Component,
    MovieDetailsComponent,
    AddMovieComponent,
    FooterComponent,
    EditMovieComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
