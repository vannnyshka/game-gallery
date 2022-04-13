import { Component, OnInit, Input} from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  @Input()
  game: Game = {
    id: 0,
    title: '',
    price: 0,
    discount: 0,
    img:'',
    describe: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
