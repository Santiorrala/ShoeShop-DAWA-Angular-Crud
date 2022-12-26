import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsusuarioService {

  ELEMENT_DATA: User[] = [
    {cedula: 9123456789, nombres: 'Alisson Citlalli', usuario: 'alissonci', correo: 'alisson.bermeov@ug.edu.ec', contrasenia: '12345'}, 
    {cedula: 9236548932, nombres: 'Eddy Santiago', usuario: 'eddysa', correo: 'eddy.orralac@ug.edu.ec', contrasenia: '12345'}, 
    {cedula: 9525225910, nombres: 'Joe Fernando', usuario: 'joefer', correo:'joe.velezc@ug.edu.ec', contrasenia: '12345'}, 
    {cedula: 9654893217, nombres: 'Kayler Italo', usuario: 'joefer', correo:'kayler.zuñigag@ug.edu.ec', contrasenia: '12345'}, 
  ];  
  constructor() { }

  getUsuario(){
    return this.ELEMENT_DATA.slice()
  }
  agregarUsuario(usuario: User){
    this.ELEMENT_DATA.unshift(usuario) 
  }

  updateUser(data: User){
    var cedula = this.ELEMENT_DATA.find(user => user.cedula == data.cedula)
    if(data.cedula == cedula?.cedula){
      var index  = this.ELEMENT_DATA.findIndex(user => user.cedula == data.cedula)
      this.ELEMENT_DATA[index] = data
    }
    // return this.ELEMENT_DATA.fill(data)
  }
}
