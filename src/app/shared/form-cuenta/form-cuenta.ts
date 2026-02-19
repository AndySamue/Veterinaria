import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-cuenta',
  //
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-cuenta.html',
  styleUrl: './form-cuenta.css',
})
export class FormCuenta {
  private formBuilder = inject(FormBuilder);

  reglaEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'; // Formato Email
  reglaPassword = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'; // Minimo 8 caracteres, incluye letras y números

  formCuenta = this.formBuilder.group(
    {
      // Validators = Validaciones.
      email: ['', [Validators.required, Validators.pattern(this.reglaEmail)]],
      password: ['', [Validators.required, Validators.pattern(this.reglaPassword)]],
      repeatPassword: ['', Validators.required],
    },
    { validators: this.validarPassword },
  );

  // Método para validar que password y repeatPassword sean iguales
  validarPassword(control: AbstractControl): ValidationErrors | null {
    const inputPassword = control.get('password')?.value;
    const inputRepeatPassword = control.get('repeatPassword')?.value;

    return inputPassword === inputRepeatPassword ? null : { noCoinciden: true };
  }

  // Método para mostrar errores personalizados
  mostrarError(campo: string, tipoError: string): boolean {
    const input = this.formCuenta.get(campo);

    // Si el input existe, no cumple con la validación y si el usuario la toca
    if (input && input.invalid && input.touched) {
      return input.hasError(tipoError);
    }
    return false;
  }

  registrar(): void {
    if (this.formCuenta.valid) {
      console.log(this.formCuenta.value);
      alert('Cuenta registrada correctamente');
    }
  }
}
