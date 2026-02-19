import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { Mascotas } from './shared/mascotas/mascotas';
import { Consultas } from './features/consultas/consultas';
import { Usuarios } from './features/usuarios/usuarios';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';
import { Formulario } from './shared/formulario/formulario';
import { Acerca } from './features/acerca/acerca';

export const routes: Routes = [
  // Rutas path vacías redirigen a la ruta principal
  // Ruta Inicial
  { path: '', component: Home },

  // Rutas para navegación
  { path: 'acerca', component: Acerca },
  { path: 'consultas', component: Consultas },
  { path: 'mascotas', component: Mascotas },
  // Protección con guardianes
  { path: 'usuarios', component: Usuarios, canActivate: [authGuard] },
  { path: 'cuenta', component: Formulario },
  { path: 'login', component: Login },

  // Redirección para rutas no encontradas
  { path: '**', component: Pagina404 },
];
