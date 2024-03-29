import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName : string[] = ['Spiderman', 'Thor', 'Iroman', 'Hulk'];

  public nameheroDelet? = "";

  public deleteHero():void {
    this.nameheroDelet = this.heroName.pop();
    
  }

}
