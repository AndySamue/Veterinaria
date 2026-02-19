import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { Servicios } from './shared/servicios/servicios';
import { Mascotas } from './shared/mascotas/mascotas';
import { Consultas } from './features/consultas/consultas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormCuenta } from './shared/form-cuenta/form-cuenta';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  // Rutas path vacías redirigen a la ruta principal
  // Ruta Inicial
  { path: '', component: Home },

  // Rutas para navegación
  { path: 'acerca', component: Servicios },
  { path: 'consultas', component: Consultas },
  { path: 'mascotas', component: Mascotas },
  // Protección con guardianes
  { path: 'usuarios', component: Usuarios, canActivate:[authGuard]},
  { path: 'cuenta', component: FormCuenta },
  { path: 'login', component: Login },

  // Redirección para rutas no encontradas
  { path: '**', component: Pagina404 },
];
