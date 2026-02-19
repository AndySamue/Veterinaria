import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/pets';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private http = inject(HttpClient);

  private API_PET = 'https://www.mockdog.dev/api/dogs';

  // Método para obtener la lista de mascotas (API)
  // Observable: Contenedor de datos y solicitudes HTTP, permite manejar la asincronía de las peticiones y sus respuestas.
  getMascotas(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_PET);  
  }
}
