import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tabla',
  standalone: false,
  templateUrl: './menu.tabla.multiplicar.component.html',
  styleUrls: ['./menu.tabla.multiplicar.component.css'],
})
export class MenuTablaMultiplicarComponent {
  public numeros: Array<number>;
  constructor() {
    this.numeros = [];
  }

  ngOnInit(): void {

    this.generarNumerosAleatorios();
  }

  generarNumerosAleatorios(): void {
    this.numeros = [];
    for (let i = 0; i < 6; i++) {
      this.numeros.push(Math.floor(Math.random() * 100) + 1);
    }
  }

}
