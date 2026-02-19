import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  subtitulo: string = 'Cuidamos de los que más quieres con servicios de calidad';

  // Variable para seleccionar un servicio
  servicioSeleccionado: string = 'ninguno';

  servicios = [
    {
      id: 1,
      nombre: 'Consulta General',
      descripcion: 'Evaluación completa de la salud de tu mascota, peso y singos vitales.',
      imagen: 'https://images.pexels.com/photos/7469220/pexels-photo-7469220.jpeg',
      activo: true,
    },
    {
      id: 2,
      nombre: 'Estetica',
      descripcion: 'Servicio de estética para mantener tu mascota limpia y con buen aspecto.',
      imagen: 'https://images.pexels.com/photos/19145883/pexels-photo-19145883.jpeg',
      activo: true,
    },
    {
      id: 3,
      nombre: 'Cirugía',
      descripcion: 'Servicio de cirugía veterinaria para procedimientos quirúrgicos.',
      imagen: 'https://images.pexels.com/photos/6235649/pexels-photo-6235649.jpeg',
      activo: false,
    },
  ];

  // Arreglo para filtrar servicios
  buscarServicio = this.servicios;

  // Función para seleccionar un servicio
  seleccionar(nombreServicio: string) {
    this.servicioSeleccionado = nombreServicio;
  }

  // Función para buscar servicios
  busqueda(event: Event) {
    // Extraer el valor del input
    const valorBuscar = (event.target as HTMLInputElement).value;
    // Cambiar subtitulo
    this.subtitulo = `Resultados para "${valorBuscar}"`;
    // Filtrar arreglo original
    this.buscarServicio = this.servicios.filter((s) =>
      s.nombre.toLowerCase().includes(valorBuscar.toLowerCase()),
    );
  }
}
