import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];

  constructor() { }

  ngOnInit(): void {
    this.games = [
      {
        id: 1,
        title: 'Fortnite',
        price: 0.0,
        discount: 0.0,
        img: ''
      },
      {
        id: 2,
        title: 'Dead by Daylight',
        price: 5.0,
        discount: 25,
        img: ''
      },
      {
        id: 3,
        title: 'Among us',
        price: 1.5,
        discount: 0.0,
        img: ''
      }
    ]
    
  }

}
