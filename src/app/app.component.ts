import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'mi primera app de angular';
  public counter: number = 10;

  aumentarContador(): void{
    this.counter = this.counter + 1;
  }

  disminuirValorEnUno(): void{
    this.counter = this.counter - 1;
  }

  resetearValor(): void{
    this.counter = 10;
  }
}
