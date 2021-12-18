import { Injectable } from '@angular/core';
import { BusquedaNumero } from '../interfaces/busqueda.interface';
import { Resumen } from '../interfaces/resumen.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InspectorNumerosService {

  constructor( private http: HttpClient ) { }

  getResumen(){
    return this.http.get(`http://localhost:4200/api/ws/LoteriaNavidadPremiados?n=resumen`,  {responseType: 'text'})
  }

  getNumberResult(n: number){
    return this.http.get(`http://localhost:4200/api/ws/LoteriaNavidadPremiados?n=${n}`, {responseType: 'text'});
  }



  addNumero( n: number , listadoNumeros: BusquedaNumero[]){
    const numeroLoteria: BusquedaNumero = {
      numero: n,
      premio: 0,
    }
    listadoNumeros.push( numeroLoteria );
  }

  deleteNumero( n: number, listadoNumeros: BusquedaNumero[] ){
    let indice = null;

    listadoNumeros.find(( elemento, posicion ) => {
      if(elemento.numero === n) indice = posicion;
    });

    if(indice){
      listadoNumeros.splice(n,1);
    }
  }

  inspeccionar(listadoNumeros: BusquedaNumero[]) {
    listadoNumeros.forEach(
      ( numero ) => {
        this.loadNumber(numero);
      }
      );
  }


  private loadResume(resumen: Resumen){
    this.getResumen().subscribe(
      (respuesta) => {
        resumen = JSON.parse( respuesta.replace("premios=", "") );
      }
    );
    
  
  }
  
  private loadNumber(numeroConsultado: BusquedaNumero){
    this.getNumberResult(numeroConsultado.numero).subscribe(
      (respuesta) => {
        numeroConsultado = JSON.parse(  respuesta.replace("busqueda=", "")  ); 
        console.log(numeroConsultado);
      }
    );
  
  }
}
