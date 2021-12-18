import { Component } from '@angular/core';
import { Message, TreeNode } from 'primeng/api';
import { Resumen } from './interfaces/resumen.interface';
import { BusquedaNumero } from './interfaces/busqueda.interface';
import { InspectorNumerosService } from './services/inspector-numeros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  resumen?: Resumen;
  listadoNumeros: BusquedaNumero[] = [];

  constructor( private inspectorNumerosService:InspectorNumerosService ){}

  ngOnInit(): void {
    //this.loadResume();
    //this.loadNumber(7);
    /*
    this.inspectorNumerosService.addNumero(7, this.listadoNumeros);
    this.inspectorNumerosService.addNumero(9999, this.listadoNumeros);
    console.log("listado inicial: ", this.listadoNumeros);
    this.inspectorNumerosService.inspeccionar(this.listadoNumeros);
    console.log("listado justo después de la llamada: ", this.listadoNumeros);
*/



  }

  title = 'LoteriaNavidad';

  msgs:Message[] = [{severity:'info', summary:'Via Message', detail:'PrimeNG rocks'}];


  data: TreeNode[] =  [{
    label: 'Root',
    children: [
        {
            label: 'Child 1',
            children: [
              {
                label: 'Child 2',
                children: [
                    {
                        label: 'Child 2.1'
                    },
                    {
                        label: 'Child 2.2'
                    }
                ]
            }
            ]
        },

    ]
}];

test(){
  console.log("Mirando: ",this.listadoNumeros);
}

}
