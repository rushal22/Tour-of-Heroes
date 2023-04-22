import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './hero_list';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {
  getHero(id: number): Observable <Hero> {
    const hero = HEROES.find(e => e.id === id)!;
    this.messageService.add(`we got hero with id of ${id}`)
    return of(hero);
  }

  constructor(private messageService: MessageService) { }

  getHeroes() :  Observable<Hero[]>{

    const heroes = of(HEROES)
    this.messageService.add("HeroService fetch the heroes")
    return heroes
  }

}
