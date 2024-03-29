import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = 'iroman';
  public age : number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescripcion(): string {
    return `${this.name} - (${this.age})`;
  }

  changenHero():void{

    this.name = 'Spiderman';
  }

  changenAge():void{  

    this.age = 50;
  }

  reset():void{
    this.name = 'iroman';
    this.age = 45;
  }
  

}
