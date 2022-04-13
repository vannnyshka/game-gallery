import { Injectable } from '@angular/core';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gamesUrl = 'api/games';

  /*getGames(): Game[] {
    return this.games;
}*/
getGames(): Observable<Game[]> {
  return this.http.get<Game[]>(
    `${this.gamesUrl}`
  );
}

deleteGame(id:number): Observable<Game[]>{
  return this.http.delete<Game[]>(`${this.gamesUrl}/${id}`,httpOptions);
}

putGame(game : Game):Observable<Game[]>{
  return this.http.put<Game[]>(`${this.gamesUrl}/${game.id}`,game);
}

  constructor(private http: HttpClient) { }
}
