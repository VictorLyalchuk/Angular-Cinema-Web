import { Component, OnInit } from '@angular/core';
import { IMovie, IEditMovieDto } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MOVIES } from '../movies-data';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie?: IMovie;
  genres:string[]|undefined = [];
  movieForm: FormGroup;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private fb: FormBuilder) {
    this.route?.params.subscribe(params => {
      let id = params["id"];
      // this.movie = MOVIES.find(m => m.id == id);

      this.movieService.getById(id).subscribe(res => {
        this.movie = res;
        this.genres = this.movie?.genres?.map(g => g.name);
      });
    });
    
    this.movieForm = this.fb.group({
      title: this.movie?.title,
      description: this.movie?.description,
      year: this.movie?.year,
      imageUrl: this.movie?.imageUrl,
      duration: this.movie?.duration,
      genres: this.genres,
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];
      this.movieService.getById(id).subscribe(res => {
        this.movie = res;
        this.genres = this.movie.genres?.map(g => g.name) || [];
  
        this.movieForm.setValue({
          title: this.movie.title,
          description: this.movie.description,
          year: this.movie.year,
          imageUrl: this.movie.imageUrl,
          duration: this.movie.duration,
          genres: this.genres,
        });
      });
    });
  }

  EditMovie() {
    if (this.movieForm) {
      const updatedMovie: IEditMovieDto = {
        title: this.movieForm.get('title')?.value,
        description: this.movieForm.get('description')?.value,
        year: this.movieForm.get('year')?.value,
        imageUrl: this.movieForm.get('imageUrl')?.value,
        duration: this.movieForm.get('duration')?.value,
        genreIds: this.movieForm.get('genres')?.value
      };
  
      this.movieService.edit(updatedMovie).subscribe(result => {
        this.movieForm.reset();
      });
    }
  }
}