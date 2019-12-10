import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifComponent } from './gif/gif.component';

const routes: Routes = [
  { path: '', loadChildren: 'src/app/gifs/gifs.module#GifsModule' },
  { path: 'gif', component: GifComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
