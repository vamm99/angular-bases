import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HeroComponent, ListComponent],
    exports: [HeroComponent, ListComponent],
    imports: [CommonModule] //Tenemos que importarlo porque aqui va toda la logica encapsulada de los heroes y listheroes
})
export class HeroModule {}