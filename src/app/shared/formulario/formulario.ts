import { Component, inject, signal } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  private servicioUsuario = inject(UsuarioService);

  public servicioAuth = inject(AuthService)

  // Lista de usuarios reactiva
  listaUsuarios = signal<Usuario[]>([]);

  // Crear un objeto del usuario que se va a guardar, vincular con el formulario
  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rol: 'EMPLEADO'
  };

  // Variable para controlar la etiqueta del botón registro
  editando = false;

  ngOnInit() {
    this.obtenerUsuarios();
  }

  // Método obtener usuarios
  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe((datosUsuarios) => {
      this.listaUsuarios.set(datosUsuarios);
    });
  }

  // Método eliminarUsuario
  eliminarUsuario(id: string) {
    // CONFIRM alerta que viene del navegador, sirve para preguntar si deseamos eliminar el registro
    if (confirm('¿Desea eliminar registro?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        // Filtrar el usuario para eliminar la tabla
        this.listaUsuarios.set(this.listaUsuarios().filter((u) => u.id !== id));
      });
    }
  }

  // Método para pasar los datos del usuario que quiero en el formulario
  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  // Método para guardar un nuevo usuario
  guardarUsuario() {
    if (this.editando && this.nuevoUsuario.id) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    } else {
      this.servicioUsuario.postUsuarios(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    }
  }

  // Método para limpiar formulario
  resetear() {
    this.editando = false;
    this.nuevoUsuario = {
      name: '',
      email: '',
      phone: '',
      password: '',
      rol: 'EMPLEADO'
    };
  }
}
