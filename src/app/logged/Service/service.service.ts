import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from '../Modelos/nota';
import { DetalleFactura } from '../Modelos/detalleFactura';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  nota: Nota [];
  Url='http://localhost:8090/v1/nota';



  postPersonas(nota: Nota){
    return this.http.post<Nota>(this.Url,nota);
  } 

  putPersonas(detalleFactura: DetalleFactura){
    return this.http.put<DetalleFactura>(this.Url,detalleFactura);
  } 


}
