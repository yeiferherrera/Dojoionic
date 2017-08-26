import { Component } from '@angular/core';
import { GithubProvider } from '../../providers/github/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info:any=[];
  constructor(private _github: GithubProvider) {

  }

  funciondojo(){
    console.log("Dojo ionic");
    this._github.buscarUsuario("yeiferherrera").then((data)=>{this.info=data});
    console.log(this.info)


  }
}
