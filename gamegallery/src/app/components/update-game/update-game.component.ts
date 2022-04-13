import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {

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

  onUpdate(){
    this.gameService.putGame(this.game).subscribe();
    this.router.navigate([''], {relativeTo: this.route});
    console.log(this.game);
  }

}
