import { Component } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  // heroes = [
  //   { id: 1, name: 'Bloodseeker' },
  //   { id: 2, name: 'Meepo' },
  //   { id: 3, name: 'Shadow Fiend' },
  //   { id: 4, name: 'Magnus' },
  // ];

  name = 'Rushal'


  price = 18

  hero: Hero = {
    id: 1,
    name: 'Ember spirit',
  }
  
}
