import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService){

  }
  ngOnInit(): void {
    this.getallHeroes();
  }
  getallHeroes() {
    this.heroService.getHeroes().subscribe( x => this.heroes = x.slice(1, 5));
  }
}
