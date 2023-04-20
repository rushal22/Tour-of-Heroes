import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../hero_list';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  name = 'Rushal'
  clickedHero?: Hero;

  heroes = HEROES

 onClicked(hero: Hero): void{
  console.log(hero);
  this.clickedHero = hero;
  
 }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Ember spirit',
  // }

    // heroes = [
  //   { id: 1, name: 'Bloodseeker' },
  //   { id: 2, name: 'Meepo' },
  //   { id: 3, name: 'Shadow Fiend' },
  //   { id: 4, name: 'Magnus' },
  // ];
  
}
