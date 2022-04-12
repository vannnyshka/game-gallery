//src/app/data.services.ts

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      games: [
        {
            id: 1,
            title: 'Sally Face',
            price: 2.5,
            discount: 0.0,
            img: 'assets/img/sallyface.jpg'
          },
          {
            id: 2,
            title: 'Stardew Valley',
            price: 5.0,
            discount: 25,
            img: 'assets/img/stardewvalley.jpg'
          },
          {
            id: 3,
            title: 'Among us',
            price: 1.5,
            discount: 0.0,
            img: 'assets/img/amongus.jpg'
          },
          {
            id: 4,
            title: 'Phasmophobia',
            price: 3,
            discount: 0.0,
            img: 'assets/img/phasmophobia.jpg'
          },
          {
            id: 5,
            title: 'Hunt: Showdown',
            price: 15,
            discount: 2.0,
            img: 'assets/img/hunt.jpg'
          },
          {
            id: 6,
            title: 'Fran Bow',
            price: 3.0,
            discount: 2.0,
            img: 'assets/img/fran.jpg'
          },
          {
            id: 7,
            title: 'Left 4 Dead: 2',
            price: 1.5,
            discount: 0.0,
            img: 'assets/img/left.jpg'
          },
          {
            id: 8,
            title: 'Limbo',
            price: 4,
            discount: 1.0,
            img: 'assets/img/limbo.jpg'
          },
          {
            id: 9,
            title: 'Outlast',
            price: 3.5,
            discount: 0.0,
            img: 'assets/img/outlast.jpg'
          },
          {
            id: 10,
            title: 'Stick Fight',
            price: 1.5,
            discount: 0.0,
            img: 'assets/img/stick.jpg'
          },
          {
            id: 11,
            title: 'Terraria',
            price: 2.5,
            discount: 1.0,
            img: 'assets/img/terraria.jpg'
          },
          {
            id: 12,
            title: 'Undertale',
            price: 2,
            discount: 1.0,
            img: 'assets/img/undertale.jpg'
          },
          {
            id: 13,
            title: 'Little Nightmares',
            price: 9,
            discount: 0.0,
            img: 'assets/img/little.jpg'
          },

      ]
    };
  }
}
