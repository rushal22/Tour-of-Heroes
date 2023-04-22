import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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
  
 }

 constructor(private heroService: HeroService){

 }
 ngOnInit(): void {
   this.getallHeroes();
 }

  getallHeroes(): void{
    this.heroes = this.heroService.getHeroes();

  }
  
}
