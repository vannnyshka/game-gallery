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
            img: 'assets/img/sallyface.jpg',
            describe: 'Delve into a dark adventure following the boy with a prosthetic face and a tragic past. Unravel the sinister mysteries of Sally world to find the truth that lies hidden beneath the shadows.'
          },
          {
            id: 2,
            title: 'Stardew Valley',
            price: 5.0,
            discount: 25,
            img: 'assets/img/stardewvalley.jpg',
            describe: 'You`ve inherited your grandfather`s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?'
          },
          {
            id: 3,
            title: 'Among us',
            price: 1.5,
            discount: 0.0,
            img: 'assets/img/amongus.jpg',
            describe: 'An online and local party game of teamwork and betrayal for 4-15 players...in space!'
          },
          {
            id: 4,
            title: 'Phasmophobia',
            price: 3,
            discount: 0.0,
            img: 'assets/img/phasmophobia.jpg',
            describe: 'Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost hunting equipment at your disposal in order to gather as much evidence as you can.'
          },
          {
            id: 5,
            title: 'Hunt: Showdown',
            price: 15,
            discount: 2.0,
            img: 'assets/img/hunt.jpg',
            describe: 'Hunt: Showdown is a thrilling, high-stakes PvPvE first-person shooter. Take down nightmarish monsters, as you compete for the bounties that will bring you glory, gear, and gold in this unforgiving – and unforgettable - online multiplayer experience.'
          },
          {
            id: 6,
            title: 'Fran Bow',
            price: 3.0,
            discount: 2.0,
            img: 'assets/img/fran.jpg',
            describe: 'Fran Bow is a creepy adventure game that tells the story of Fran, a young girl struggling with a mental disorder and an unfair destiny.'
          },
          {
            id: 7,
            title: 'Left 4 Dead: 2',
            price: 1.5,
            discount: 0.0,
            img: 'assets/img/left.jpg',
            describe: 'Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans'
          },
          {
            id: 8,
            title: 'Limbo',
            price: 4,
            discount: 1.0,
            img: 'assets/img/limbo.jpg',
            describe: 'Uncertain of his sister`s fate, a boy enters LIMBO'
          },
          {
            id: 9,
            title: 'Outlast',
            price: 3.5,
            discount: 0.0,
            img: 'assets/img/outlast.jpg',
            describe: 'Hell is an experiment you can`t survive in Outlast, a first-person survival horror game developed by veterans of some of the biggest game franchises in history. As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you'
          },
          {
            id: 10,
            title: 'Stick Fight',
            price: 1.5,
            discount: 0.0,
            img: 'assets/img/stick.jpg',
            describe: 'Stick Fight is a physics-based couch/online fighting game where you battle it out as the iconic stick figures from the golden age of the internet.'
          },
          {
            id: 11,
            title: 'Terraria',
            price: 2.5,
            discount: 1.0,
            img: 'assets/img/terraria.jpg',
            describe: 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!'
          },
          {
            id: 12,
            title: 'Undertale',
            price: 2,
            discount: 1.0,
            img: 'assets/img/undertale.jpg',
            describe: 'UNDERTALE! The RPG game where you don`t have to destroy anyone.'
          },
          {
            id: 13,
            title: 'Little Nightmares',
            price: 9,
            discount: 0.0,
            img: 'assets/img/little.jpg',
            describe: 'Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw – a vast, mysterious vessel inhabited by corrupted souls looking for their next meal.'
          },

      ]
    };
  }
}
