import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from '../Modelos/nota';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  nota: Nota [];
  Url='http://186.87.166.89:8090/v1/nota';

  getPersonas(){
    return this.http.get<Nota []>(this.Url);
    
  }

  deletePersona(nota: Nota){
    return this.http.delete<Nota>(this.Url+"/"+nota.id);
  
  }

  postPersonas(nota: Nota){
    return this.http.post<Nota>(this.Url,nota);
  } 


  updatePersona(nota: Nota){
    return this.http.put<Nota>(this.Url+"/"+nota.id,nota);
  }


  getPersonasId(id: number){
    return this.http.get<Nota>(this.Url+"/"+id);
  }
  


}
