import { Component, OnInit } from '@angular/core';
import {listaCategorias, listaCategorias2, listaCategorias3} from '../../interfaces/tareas';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  ListaCategorias=listaCategorias;
  ListaCategorias2=listaCategorias2;
  ListaCategorias3=listaCategorias3;
  constructor() { }
  ngOnInit(): void {
  }
  eliminar(aux : any) {
    this.ListaCategorias3.splice(aux,1);
    for (let index = aux; index < listaCategorias3.length; index++) {
        listaCategorias3[index].id=listaCategorias3[index].id-1 }
  }
}