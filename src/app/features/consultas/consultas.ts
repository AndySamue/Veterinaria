import { Component } from '@angular/core';
import { Mascota } from '../../models/mascotas';
import { DetallePaciente } from '../../shared/detalle-paciente/detalle-paciente';

@Component({
  selector: 'app-consultas',
  imports: [DetallePaciente],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {
  mascotas = [
    { id: 1, nombre: 'Lucas', especie: 'Perro', historial: 'Vacunas al día, sin alergias' },
    {
      id: 2,
      nombre: 'Milo',
      especie: 'Gato',
      historial: 'Vacunas al día, alergia a ciertos alimentos',
    },
    { id: 3, nombre: 'Bella', especie: 'Conejo', historial: 'Vacunas al día, sin alergias' },
  ];

  mascotaSeleccionada: Mascota | null = null;

  mensajeAviso: string = '';

  // Función que se ejecuta al hacer clic en "Ver Ficha"
  verDetalles(mascota: Mascota) {
    this.mascotaSeleccionada = mascota;
  }

  // Funcion encargada de gestionar el evento personalizado que viene del hijo detalle-paciente
  procesarAviso(mensaje: string) {
    this.mensajeAviso = mensaje;
  }
}
