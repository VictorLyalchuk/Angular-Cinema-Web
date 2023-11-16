import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { MOVIES } from '../movies-data';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: IMovie[] = MOVIES;
  //movies: IMovie[] = [];
  constructor(private http: HttpClient, private movieService:MovieService) {
    

    // this.http.get<any[]>('https://localhost:7213/api/movie').subscribe(res => {
    //   console.log(res);
    //   this.movies = res;
    // });

  }
  ngOnInit(): void {
    this.movieService.getAll().subscribe(res =>{
      this.movies = res;
    });
  }
}