import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { AboutComponent } from './components/about/about.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { OneItemComponent } from './components/one-item/one-item.component';
import { UpdateGameComponent } from './components/update-game/update-game.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';



const routes: Routes = [
  { path: '', component:  GamesComponent},
  { path: 'about', component: AboutComponent },
  { path:  ':id', component: OneItemComponent},
  { path:  ':id/update', component: UpdateGameComponent},
  { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
