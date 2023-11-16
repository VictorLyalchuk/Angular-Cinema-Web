import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateMovieDto, IGenre, IMovie } from '../movie';
import { MOVIES } from '../movies-data';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  //movies: IMovie[] = MOVIES;
  findInfo?: FormControl;
  movieForm!: FormGroup;
  genres!: IGenre[];
  
  constructor(private fb: FormBuilder, private movieService: MovieService,
    private router: Router) {}


  ngOnInit(): void {
    this.movieService.getGenres().subscribe(res => {
      this.genres = res;
    })

    this.movieForm = this.fb.group({
      title: [" ", [Validators.required, Validators.minLength(3)]],
      year: [new Date().getFullYear(), Validators.max(new Date().getFullYear())],
      description: "",
      imageUrl: "",
      duration: '01:30:00',
      genreIds: [[]]
    });
  }
  AddMovie() {
    // let item = this.movieForm.value;
    // item.id = this.movies.length + 1;
    // this.movies.push(item);

    let item2 = this.movieForm.value as ICreateMovieDto;
    item2.duration += ":00";
    this.movieService.create(item2).subscribe(res => {
      this.router.navigate(['movies']);
    }
    );
  }
}