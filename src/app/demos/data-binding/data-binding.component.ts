import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public contadorClique: number = 0;
  public urlImg: string = 'data:image/png;base64,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';
  public nome: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  adicionarClique() {
    this.contadorClique++;
  }

  zerarContadorClique() {
    this.contadorClique--;
  }


  KeyUp(event: any) {
    this.nome = event.target.value;
  }

}
