import { Component, OnInit } from '@angular/core';
import { Nota } from '../../Modelos/nota';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  nota: Nota= new Nota();

  constructor(private routert: Router, private service: ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonasId(+id).subscribe(data=>{

         this.nota=data;
    })
  }


  Actualizar(nota: Nota){
    this.service.updatePersona(nota).subscribe(data=>{
      this.nota=data;
      alert("Se actualizo con exitos.....!!!!");
      this.routert.navigate(["crud"]);
    })

  }


}
