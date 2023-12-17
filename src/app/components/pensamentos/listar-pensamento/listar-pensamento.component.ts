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
  paginaAtual = 1
  haMaisPensamentos = true;
  filtro = ''

  constructor(private service:PensamentoService) {

   }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual,this.filtro).subscribe((listaPensamentos)=> {
      this.listaPensamentos = listaPensamentos
    })

    }

    carregarMaisPensamentos(){

      this.service.listar(++this.paginaAtual,this.filtro).subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos)
        if(!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      })
  }

  pesquisarPensamentos(){
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listar(this.paginaAtual,this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
