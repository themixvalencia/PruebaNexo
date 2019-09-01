import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Nota } from '../../Modelos/nota';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router,private servicio: ServiceService) { }

  ngOnInit() {
  }
 
  nota:Nota= new Nota() ;

  Registrar(nombre: String,titulo: String, tareas: String){
    this.nota.nombre=nombre;
    this.nota.contenido=tareas;
    this.nota.titulo= titulo;


    this.servicio.postPersonas(this.nota).subscribe(data=>{
      alert("se ha agregado con exito");
      
      this.router.navigate(['crud']);
 
    });
  }



}
