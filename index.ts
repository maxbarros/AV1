class Item
{
    nome: String;
    discricao: String;

    constructor(nome: String, descricao: String)
    {
        this.nome = nome;
        this.discricao = descricao;
    }
}


class Mochila
{
    itens: Item[] = [];
    capacidadeMaxima: number;

    constructor(capacidadeMaxima: number)
    {
        this.capacidadeMaxima = capacidadeMaxima;
    }

}


class Personagem
{
    nickname: String;
    level: number = 0;
    forca: number;
    agilidade: number;
    stamina: number;
    mochila!: Mochila;

    constructor(nick: String, forca: number, agilidade: number, stamina: number)
    {
        this.nickname = nick;
        this.forca = forca;
        this.agilidade = agilidade;
        this.stamina = stamina;
    }

    almentarLevel()
    {
        this.agilidade++;
        this.stamina++;
        this.forca++;
    }

}


let ramayana: Personagem = new Personagem("Ramayana", 10, 8, 10);
ramayana.mochila = new Mochila(3);
ramayana.mochila.itens.push(new Item('Espada', 'Espada de iniciante'));
console.log(ramayana);
console.log(ramayana.mochila.itens);

ramayana.almentarLevel();
console.log(ramayana);


console.log('Teste');
console.log('Tá ok');