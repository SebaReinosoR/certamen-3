import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators , FormControl} from '@angular/forms';
import {listaCategorias, listaCategorias2, listaCategorias3} from '../../interfaces/tareas'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {



  text:any;
  numero:any;
  aux:any;

  constructor(private FormBuilder: FormBuilder) {}
  inicioF = new FormGroup({});
  ngOnInit(): void {
    this.inicioF=this.FormBuilder.group({
      Titulo: new FormControl('',Validators.required),
      Estado: new FormControl('',Validators.required)
    })
  }
onSubmit(){
      this.aux={
        id:this.numero,
        titulo:this.text
      } 
      if(this.numero==3){
        this.aux={
          id:listaCategorias.length,
          titulo:this.text
        };
        listaCategorias.push(this.aux);
        console.log(this.aux);
      }
      else if(this.numero==2){
        this.aux={
          id:listaCategorias2.length,
          titulo:this.text
        };
        listaCategorias2.push(this.aux);
        console.log(this.aux)
      }
      else if(this.numero==1){
        this.aux={
          id:listaCategorias3.length,
          titulo:this.text
        };
        listaCategorias3.push(this.aux);
        console.log(this.aux)
      }

    }
}
  
