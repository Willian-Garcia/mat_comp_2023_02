//2.9. Uma progressão geométrica é uma sequência numérica onde cada elemento, a partir do segundo, é obtido multiplicando-se o anterior por uma constante. Utilizando uma linguagem de programação que dê suporte a orientação a objetos, defina uma progressão geométrica e dê exemplo de geração de seus primeiros 50 termos.

class ProgressaoGeometrica_wga {
  primeiroTermo: number;
  razao: number;

  constructor(primeiroTermo: number, razao: number) {
      this.primeiroTermo = primeiroTermo;
      this.razao = razao;
  }

  geraradorTermos_wga(qtdTermos: number): void {
      let termoAtual = this.primeiroTermo;
      let i = 0;

      while (i < qtdTermos) {
          console.log(`Termo ${i + 1}: ${termoAtual}`);
          termoAtual *= this.razao;
          i++;
      }
  }
}


const razao = 2; // Razão da progressão
const primeiroTermo = 1; // Primeiro termo da progressão

const progressao = new ProgressaoGeometrica_wga(primeiroTermo, razao);
progressao.geraradorTermos_wga(50);

