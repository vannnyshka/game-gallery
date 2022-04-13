import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-game-item-list',
  templateUrl: './game-item-list.component.html',
  styleUrls: ['./game-item-list.component.css']
})
export class GameItemListComponent implements OnInit {

  @Input()
  game: Game = {
    id: 0,
    title: '',
    price: 0,
    discount: 0,
    img:'',
    describe:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
