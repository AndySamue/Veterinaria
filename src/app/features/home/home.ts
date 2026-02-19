import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Card } from "../../shared/card/card";
import { FAQ } from "../../shared/faq/faq";
import { Servicios } from "../../shared/servicios/servicios";
import { Pacientes } from "../../shared/pacientes/pacientes";
import { Internados } from "../../shared/internados/internados";

@Component({
  selector: 'app-home',
  imports: [Hero, Card, FAQ, Servicios, Pacientes, Internados],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
