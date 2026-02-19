import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-internados',
  // Importaciones necesarias para el uso de formularios y directivas comunes
  imports: [CommonModule, FormsModule],
  templateUrl: './internados.html',
  styleUrl: './internados.css',
})
export class Internados {
  filtro: string = '';

  internados = [
    { nombre: 'Lucas', especie: 'Perro', urgencia: 'Alta', progreso: 80 },
    { nombre: 'Milo', especie: 'Gato', urgencia: 'Media', progreso: 60 },
    { nombre: 'Bella', especie: 'Conejo', urgencia: 'Baja', progreso: 40 },
  ];
}
