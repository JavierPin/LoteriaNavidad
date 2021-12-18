import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  msgs:Message[] = [{severity:'info', summary:'66 988', detail:'en espera...'}];

  constructor() { }

  ngOnInit(): void {
  }

}
