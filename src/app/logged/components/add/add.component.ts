import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Nota } from '../../Modelos/nota';
import { DetalleFactura } from '../../Modelos/detalleFactura';

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
  detalleFactura: DetalleFactura= new DetalleFactura();

  Registrar(idFactura: number,fechaFactura: String, idCliente: number, idCamarero: number,idMesa: number, plato: String, importe: number, cocinero: number){
    this.nota.idFactura=idFactura;
    this.nota.fechaFactura=fechaFactura;
    this.nota.idCliente= idCliente;
    this.nota.idCamarero=idCamarero;
    this.nota.idMesa=idMesa;
    this.detalleFactura.plato=plato;
    this.detalleFactura.importe=importe;
    this.detalleFactura.idCocinero=cocinero;
    this.detalleFactura.idFactura=idFactura;
   
    this.servicio.postPersonas(this.nota).subscribe(data=>{
     
    });

    this.servicio.putPersonas(this.detalleFactura).subscribe(data=>{
      alert("se ha modificado la fatura");  
      this.router.navigate(['crud']);
 
    });

    


  }



}
