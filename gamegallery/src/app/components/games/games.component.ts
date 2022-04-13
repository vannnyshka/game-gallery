import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];
  blockcng:boolean = true;

  constructor(private gamesService: GameService) { }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(games => {
      this.games = games;
    });
    
  }

  onListBlock(){
    console.log("It works:", this.blockcng);
    this.blockcng=!this.blockcng;
  }

}
