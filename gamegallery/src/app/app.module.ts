import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GamesComponent } from './components/games/games.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { GameItemListComponent } from './components/game-item-list/game-item-list.component';
import { OneItemComponent } from './components/one-item/one-item.component';
import { FormsModule } from '@angular/forms';
import { UpdateGameComponent } from './components/update-game/update-game.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    GameItemComponent,
    GamesComponent,
    AboutComponent,
    GameItemListComponent,
    OneItemComponent,
    UpdateGameComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { post204: false, put204: false, delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
