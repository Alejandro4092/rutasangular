import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-numero.doble.component',
  standalone: false,
  templateUrl: './numero.doble.component.html',
  styleUrl: './numero.doble.component.css',
})
export class NumeroDobleComponent {
  public numero!:number;
  public doble:number;
  constructor(private _activatedRoute:ActivatedRoute,
     private _router:Router

  ){
    this.doble=0;
  }
  redirect(num:number):void{
    this._router.navigate(['/numerodoble',num])
  }
  goToHome():void{
    this._router.navigate(['/']);
  }
  ngOnInit(){
    //Aqui es donde nos subscribimos a los parametros
    this._activatedRoute.params.subscribe((parametros:Params)=>{
      if(parametros['numero']!=null){
        this.numero=parseInt(parametros['numero']);
        this.doble=this.numero*2;
      }
    })
  }

}
