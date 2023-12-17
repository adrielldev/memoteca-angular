import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import {Pensamento} from '../pensamento'

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos:Pensamento[] = [
  ];

  constructor(private service:PensamentoService) {

   }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos)=> {
      this.listaPensamentos = listaPensamentos
    })

    }

}
