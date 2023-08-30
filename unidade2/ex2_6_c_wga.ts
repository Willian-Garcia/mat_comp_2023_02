//2.6. Utilizando linguagem de programação defina:
//c) Uma função recursiva para o cálculo do fatorial de um número.


function fatorial_wga(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial_wga(n - 1);
    }
}

console.log(fatorial_wga(5));