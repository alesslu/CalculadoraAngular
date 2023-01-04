import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  private numeroActual: number = 0;
  private numeroAnterior: number = 0;
  private operador: string = '';
  private resultado: number = 0;
  private operaciones: string[] = ['+', '-', '*', '/'];
  salida: string = '';

  agregar(valor: string): void {
    if (this.operaciones.includes(valor)) {
      this.operador = valor;
      this.numeroActual = Number(this.salida.substring(1));
      this.salida = this.salida + valor;
    } 
    else if (valor === '=') {
      console.log(this.salida.split(this.operador)[1].substring(1));
      this.numeroAnterior = Number(this.salida.split(this.operador)[1].substring(1));
      this.calcular();
    } 
    else if (valor === 'C') {
      this.limpiar();
    }
    else if (this.salida === '') {
      this.salida = "$" + valor;
    }
    else if (this.salida[this.salida.length-1] === this.operador) {
      this.salida = this.salida + "$" + valor;
    }
    else {
      this.salida = this.salida + valor;
    }
  }

  calcular(): void {
    switch (this.operador) {
      case '+':
        this.resultado = this.numeroActual + this.numeroAnterior;
        break;
      case '-':
        this.resultado = this.numeroActual - this.numeroAnterior;
        break;
      case '*':
        this.resultado = this.numeroActual * this.numeroAnterior;
        break;
      case '/':
        this.resultado = this.numeroActual / this.numeroAnterior;
        break;
    }
    this.salida = "$" + this.resultado.toString();
    console.log(this.numeroActual, this.numeroAnterior, this.operador, this.resultado);
  }

  limpiar(): void {
    this.salida = '';
  }
  retroceso():void{
      this.salida = String(this.salida.slice(0,this.salida.length-1));
  }

}



