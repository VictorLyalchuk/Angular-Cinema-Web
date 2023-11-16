import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateMovieDto, IEditMovieDto, IGenre, IMovie } from './movie';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovieById(movieId: number) {
    throw new Error('Method not implemented.');
  }
  private url:string;
  
  constructor(private http:HttpClient) { 
    this.url = environment.apiUrl+'movie';
    // this.url = 'https://localhost:7213/api/movie';
    // this.url = 'https://cinema-webapi.azurewebsites.net/api/movie';
  }
  getAll():Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.url);
    // return this.http.get<IMovie[]>('movies');
  }
  getById(id:number):Observable<IMovie>{
    return this.http.get<IMovie>(`${this.url}/${id}`);
  }  
  getGenres(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(`${this.url}/genres`);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<IMovie>(`${this.url}/${id}`);
  }
  create(movie: ICreateMovieDto): Observable<any> {
    return this.http.post(`${this.url}/create`, movie);
  }
  edit(movie: IEditMovieDto): Observable<any> {
    return this.http.post(`${this.url}/edit`, movie);
  }
}
