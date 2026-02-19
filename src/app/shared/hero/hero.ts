import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  // La información que recibe del componente padre
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() textoBoton!: string;
  @Input() imagen!: string;
}
