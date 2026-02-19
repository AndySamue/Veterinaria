import { Component, inject, signal } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { Pet } from '../../models/pets';

@Component({
  selector: 'app-mascotas',
  imports: [],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {
  private mascotasServicio = inject(PetService);

  // Es una variable reactiva, que se puede vigilar de manera automática
  // Cada vez que cambie su valor, Angular tiene que actualizar la vista para reflejar el nuevo valor. (HTML)
  mascotas = signal<Pet[]>([]);

  ngOnInit() {
    this.mascotasServicio.getMascotas().subscribe((datos) => {
      this.mascotas.set(datos.data);
    });
  }

 
}
