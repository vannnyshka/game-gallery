import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { AboutComponent } from './components/about/about.component';
import { GameItemComponent } from './components/game-item/game-item.component';



const routes: Routes = [
  { path: '', component:  GamesComponent},
  { path: 'about', component: AboutComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
