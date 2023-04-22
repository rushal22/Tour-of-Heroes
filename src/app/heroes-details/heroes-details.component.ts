import { Component, Input , OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent {

  heroDetail? : Hero

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location){

  }

  ngOnInit(): void{
    this.getallHero();
  }

  getallHero() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id).subscribe(x => this.heroDetail = x)
     
  }

  goBack(): void {
    this.location.back()
  }
}
