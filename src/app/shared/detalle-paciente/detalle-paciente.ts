import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascotas';

@Component({
  selector: 'app-detalle-paciente',
  imports: [],
  templateUrl: './detalle-paciente.html',
  styleUrl: './detalle-paciente.css',
})
export class DetallePaciente {
  // Indicar que el componente padre va a enviar información
  // El signo ? indica que la macota es opcional, es decir, puede ser null o undefined
  @Input() mascota!: Mascota;

  // Enviar un evento al Padre
  // Creamos el evento "notificar Acción"
  @Output() notificarAccion = new EventEmitter<string>();

  // Función que se va a activar con un click en el botón del componente hijo
  // Definir que hace el evento notificarAcción

  avisarIngreso():void{
    if(this.mascota){
      this.notificarAccion.emit(
        `Paciente ${this.mascota.nombre} ingresado a consulta`
      )
    }
  }

}
