import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fist-app';
  show:boolean = false;
  showDos:boolean = true;
  activo:string = '';

  cursos:string[] = ['HTML', 'ANGULAR', 'PHP']
  animales:Array<any> = [
    {tipo:'Perro', nombre:'Lisa', edad:10},
    {tipo:'Gato', nombre:'Pepon', edad:2},
    {tipo:'Pato', nombre:'TanTan', edad:7}
  ]
}
