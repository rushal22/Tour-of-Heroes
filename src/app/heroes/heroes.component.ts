import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  name = 'Rushal'
  heroes : Hero [] = [];
  clickedHero?: Hero;

 onClicked(hero: Hero): void{
  console.log(hero);
  this.clickedHero = hero;
  this.messageService.add(`You have selected the hero of Id ${hero.id} and Name ${hero.name}`)
  
 }

 constructor(private heroService: HeroService , private messageService: MessageService){

 }
 ngOnInit(): void {
   this.getallHeroes();
 }

  getallHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(x => {
      console.log(x);
      this.heroes = x
    })
  }
  
}
