import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { MOVIES } from '../movies-data';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie!: IMovie;
  genres:string[] | undefined[] | undefined;
  movieService: any;
  
  ngOnInit(): void {
    this.genres = this.movie.genres?.map(g => g.name);
  }

  deleteMovie(movieId: number) {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.movieService.delete(movieId).subscribe(() => {
        const movieIndex = MOVIES.findIndex(m => m.id === movieId);
        if (movieIndex >= 0) {
          MOVIES.splice(movieIndex, 1);
        }
      });
    }
  }

}
