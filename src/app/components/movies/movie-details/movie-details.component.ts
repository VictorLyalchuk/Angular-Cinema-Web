import { Component } from '@angular/core';
import { IMovie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from '../movies-data';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie?: IMovie;
  genres:string[]|undefined = [];
  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.route?.params.subscribe(params => {
      let id = params["id"];
      // this.movie = MOVIES.find(m => m.id == id);

      this.movieService.getById(id).subscribe(res => {
        this.movie = res;
        this.genres = this.movie?.genres?.map(g => g.name);
      });
    });
  }
}