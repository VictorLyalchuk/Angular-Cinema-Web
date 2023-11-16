import { Time } from "@angular/common";

export interface IMovie{
    id:number;
    title:string;
    description?:string;
    year:number;
    imageUrl: string;
    duration:Time;
    genres?:IGenre[];
}
export interface IGenre{
    id:number;
    name:string;
}
export interface ICreateMovieDto{
    title:string;
    description?: string;
    year:number;
    imageUrl:string;
    duration:string;
    genreIds?:number[];
}
export interface IEditMovieDto{
    title:string;
    description?: string;
    year:number;
    imageUrl:string;
    duration:string;
    genreIds?:number[];
}