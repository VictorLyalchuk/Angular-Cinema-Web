import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { EditMovieComponent } from './components/movies/edit-movie/edit-movie.component';
import { LoginComponent } from './components/account/login/login.component';
import { AuthorizedGuard } from './authorized.guard';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent  },
  { path: 'home', component: HomeComponent},
  { path: 'movie-details/:id', component: MovieDetailsComponent},
  { path: 'add-movie', component: AddMovieComponent, canActivate:[AuthorizedGuard]},
  { path: 'edit-movie/:id', component: EditMovieComponent , canActivate:[AuthorizedGuard]},
  { path: "login", component: LoginComponent},
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
