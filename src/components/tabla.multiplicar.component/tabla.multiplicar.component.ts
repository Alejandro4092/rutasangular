import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-tabla.multiplicar.component',
  standalone: false,
  templateUrl: './tabla.multiplicar.component.html',
  styleUrl: './tabla.multiplicar.component.css',
})
export class TablaMultiplicarComponent implements OnInit {
  public numero: number;
  public tabla: Array<number>;

  constructor(private _activatedRoute:ActivatedRoute) {
    this.numero = 0;
    this.tabla = new Array<number>();
  }

  ngOnInit():void{
    this._activatedRoute.params.subscribe((parametros:Params) => {
      this.numero = parametros['numero'];
      this.generarTablaMultiplicar();
    });
  }

  generarTablaMultiplicar(): void {
    this.tabla = new Array<number>();
    for (let i = 1; i <= 10; i++) {
      this.tabla.push(this.numero * i);
    }
  }

}
