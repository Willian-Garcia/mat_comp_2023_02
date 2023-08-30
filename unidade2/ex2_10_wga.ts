//2.10. A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja, para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um mesmo valor.

class Fibonacci_wga {
  calculados: { [key: number]: number } = {};

  calcularTermo_wga(n: number): number {
      if (this.calculados[n] !== undefined) {
          console.log(`Valor repetido! Usando cache para ${n}`);
          return this.calculados[n];
      }

      if (n <= 0) {
          return 0;
      } else if (n === 1) {
          return 1;
      } else {
          const resultado = this.calcularTermo_wga(n - 1) + this.calcularTermo_wga(n - 2);
          this.calculados[n] = resultado;
          return resultado;
      }
  }
}


const fibonacci = new Fibonacci_wga();
console.log(fibonacci.calcularTermo_wga(5));
console.log(fibonacci.calcularTermo_wga(10));
console.log(fibonacci.calcularTermo_wga(5));




class NovoFibonacci_wga1 {
  calcularNovoTermo_wga(n: number): number {
      if (n <= 0) {
          return 0;
      } else if (n === 1) {
          return 1;
      } else {
          return this.calcularNovoTermo_wga(n - 1) + this.calcularNovoTermo_wga(n - 2);
      }
  }
}

const novoFibonacci_wga = new NovoFibonacci_wga1();
console.log(fibonacci.calcularTermo_wga(5));
console.log(fibonacci.calcularTermo_wga(10));
