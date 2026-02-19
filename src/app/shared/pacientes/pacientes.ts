import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css',
})
export class Pacientes {
  subtitulo: string = 'Mascotas que forman parte de nuestra familia veterinaria';

  mascotaSeleccionada: string = '';

  pacientes = [
    {
      id: 1,
      nombre: 'Firulais',
      especie: 'Perro',
      raza: 'Labrador Retriever',
      imagen: 'https://images.pexels.com/photos/97082/weimaraner-puppy-dog-snout-97082.jpeg',
      internado: true,
    },
    {
      id: 2,
      nombre: 'Dogo',
      especie: 'Perro',
      raza: 'Akita Inu',
      imagen: 'https://images.pexels.com/photos/4504148/pexels-photo-4504148.jpeg',
      internado: false,
    },
    {
      id: 3,
      nombre: 'Toby',
      especie: 'Perro',
      raza: 'Pitbull',
      imagen: 'https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg',
      internado: false,
    },
    {
      id: 4,
      nombre: 'Max',
      especie: 'Perro',
      raza: 'French Bulldog',
      imagen: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg',
      internado: true,
    },
    {
      id: 5,
      nombre: 'Rocky',
      especie: 'Perro',
      raza: 'Pastor Alemán',
      imagen: 'https://images.pexels.com/photos/6291567/pexels-photo-6291567.jpeg',
      internado: true,
    },
    {
      id: 6,
      nombre: 'Bella',
      especie: 'Perro',
      imagen: 'https://images.pexels.com/photos/31137577/pexels-photo-31137577.jpeg',
      internado: false,
    },
    {
      id: 7,
      nombre: 'Luna',
      especie: 'Perro',
      imagen: 'https://images.pexels.com/photos/3756603/pexels-photo-3756603.jpeg',
      internado: false,
    },
  ];

  buscarMascota = this.pacientes;

  seleccionar(nombreMascota: string) {
    this.mascotaSeleccionada = nombreMascota;
  }

  busqueda(event: Event) {
    const valorBuscar = (event.target as HTMLInputElement).value;
    this.subtitulo = `Resultados para "${valorBuscar}"`;
    this.buscarMascota = this.pacientes.filter((m) =>
      m.nombre.toLowerCase().includes(valorBuscar.toLowerCase()),
    );
  }
}
