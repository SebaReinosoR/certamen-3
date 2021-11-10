import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Tareas , listaCategorias , listaCategorias2 , listaCategorias3} from 'src/app/interfaces/tareas'

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
  id: number=0;
  constructor(private FormBuilder: FormBuilder ,private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
      console.log(this.id);
    })
  }
  text:any;
  numero:any;
  aux:any;
  

  Agregar = new FormGroup({});
  

  ngOnInit(): void {
    this.Agregar=this.FormBuilder.group({
      titulo: new FormControl('',Validators.required),
      Estado: new FormControl('',Validators.required)
    })
  }
  eliminar(aux : any) {
    listaCategorias3.splice(aux,1);
    for (let index = aux; index < listaCategorias3.length; index++) {
        listaCategorias3[index].id=listaCategorias3[index].id-1 }
  }
  Actualizar(){
    if(this.numero==1){
      this.aux={
        id:this.id,
        titulo:this.text
      } 
      listaCategorias3[this.id]=this.aux;
    }
    if(this.numero==2){
      this.aux={
        id:listaCategorias2.length,
        titulo:this.text
      } 
      listaCategorias2.push(this.aux);
      this.eliminar(this.id);
    }
    if(this.numero==3){
      this.aux={
        id:listaCategorias.length,
        titulo:this.text
      } 
      listaCategorias.push(this.aux);
      this.eliminar(this.id);
    }
  }
}