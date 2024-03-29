import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';
  public contador : number =10;

  insertar ( valor : number) : void {

    this.contador += valor;
  }

  eliminar ():void { 
    this.contador = 10;
  }


}


