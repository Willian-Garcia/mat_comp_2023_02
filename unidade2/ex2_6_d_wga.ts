//2.6. Utilizando linguagem de programação defina:
//d) Uma definição que corresponda a definição do tipo gênero-diferença para um uma pessoa que estude em uma faculdade. Utilize uma linguagem que dê suporte a herança.


class Estudante_wga {
    nome:string;
    idade:number;

    constructor(nome: string,idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    aluno_wga(){
        return `Aluno: ${this.nome}, Idade: ${this.idade}.`;
    }
}

class Graduacao_wga extends Estudante_wga  {
    curso:string;

    constructor(nome: string, idade: number, curso: string) {
        super(nome, idade);
        this.curso = curso;
    }

    graducao_wga(){
        return `Curso: ${this.curso}.`;
    }
}

class Formado_wga extends Graduacao_wga{
    formado:boolean;

    constructor (nome: string, idade: number, curso: string,formado:boolean){
        super(nome, idade,curso);
        this.formado = formado;
    }
    terminado_wga(){
        if (this.formado) {
            return `O Aluno ${this.nome} está formado.`;
        } else {
            return `O Aluno ${this.nome} não está formado.`;
        }
    }
}

const estudante1 = new Formado_wga("Willian",25,"Engenharia Mecânica",true);
console.log(estudante1.aluno_wga());
console.log(estudante1.graducao_wga());
console.log(estudante1.terminado_wga());

const estudante2 = new Formado_wga("Willian",25,"Desenvolvimento de Softwares Multiplataforma",false);
console.log(estudante2.aluno_wga());
console.log(estudante2.graducao_wga());
console.log(estudante2.terminado_wga());