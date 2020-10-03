import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Ignacio',
      especialidad: 'HTML',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quam commodi sapiente esse itaque. Nam placeat consequatur explicabo dolores molestias perspiciatis, non error odio aut ipsum iusto ullam soluta praesentium.'
    },
    {
      nombre: 'Maria',
      especialidad: 'CSS',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quam commodi sapiente esse itaque. Nam placeat consequatur explicabo dolores molestias perspiciatis, non error odio aut ipsum iusto ullam soluta praesentium.'
    }

  ]

  constructor() {
    console.log('funcionando serivio')
   }
  
  obtenerEquipo(){
    return this.equipo;
  }

  obtenerUno(i){
    return this.equipo[i];
  }
}
