import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Nota } from '../../Modelos/nota';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { }
  notas: Nota [];

  ngOnInit() {
    this.service.getPersonas().subscribe(data=>{
      this.notas=data;
    });

  }

  Delete(nota: Nota){
    this.service.deletePersona(nota).subscribe(data=>{
      this.notas=this.notas.filter(p => p!==nota);
      alert("usuario eliminado");
    })

  }

  Editar(nota: Nota){
    localStorage.setItem("id",nota.id.toString());
    this.router.navigate(["edit"]);
    
  }




}
