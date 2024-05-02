import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

export const routes: Routes = [
    { path: 'movies/:id', component: MovieDetailsComponent},
    { path: 'movies',  component: MovieListComponent},
    { path: '',  component: MovieListComponent},
];
