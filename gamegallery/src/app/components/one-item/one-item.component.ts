import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.css']
})
export class OneItemComponent implements OnInit {

  id: number = 0;

  @Input()
  game: Game = {
    id: 0,
    title: '',
    price: 0,
    discount: 0,
    img:'',
    describe: ''
  }


  constructor(private route: ActivatedRoute, private router: Router, private gameService: GameService) { }

  ngOnInit(): void {
    this.route.params.pipe(map(p => p['id'])).subscribe(val => {
      this.id = Number(val);
    });
    this.gameService.getGames().subscribe(game => {
      game.forEach(val=> {
        if (val.id == this.id)
        this.game = val;
      })
    });
  }

  onDelete(){
    this.gameService.deleteGame(this.id).subscribe();
    this.router.navigate([''], {relativeTo: this.route});
    console.log(this.game);
  }

  /*onUpdate(describe : string){
    let update_game: Game={
      id: this.game.id,
      title: this.game.title,
      describe: this.describe,
      price: this.game.price,
      img: this.game.img,
      discount: this.game.discount
    }
    this.gameService.updateGame(update_game.id, update_game.title, 
      update_game.describe, update_game.price, 
      update_game.img, update_game.discount).subscribe();
    this.router.navigate([''], {relativeTo: this.route});
    console.log(update_game.describe);
  }*/

}
