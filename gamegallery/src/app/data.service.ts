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
    };
  }
}
