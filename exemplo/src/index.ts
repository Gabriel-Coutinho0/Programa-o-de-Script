interface Funcao {
    (nro:number):boolean;
}

type Func = {
    (nro:number):boolean;
}

function isPar (nro:number):boolean {
    return nro%2 == 0? true :false
}

const _isPar: (nro:number)=> boolean = (nro:number):boolean => {
    return nro%2 == 0
}

// console.log( isPar(2) )
// console.log( isPar(3) )

// console.log( _isPar(2) )
// console.log( _isPar(3) )

let nros = [2,3,4,5]

const ispar:Funcao = (nro:number):boolean => {
    return nro%2 == 0;
}

// For normal nós definimos o contador para percorrer já o  forEach pega todo o tamanho da lista.


//2
for(let i = 0; i<nros.length;i++){
    console.log(ispar(nros[i]));
}

//3
const copia = [...nros]
nros.forEach(item => console.log(ispar(item)));

//4
const Nros:number[] = [2,3,4,5]
let soma = 0
for(let i = 0; i < Nros.length; i++){
    soma += Nros[i]
}
console.log(soma);
//const somatorio = Nros.reduce((total,item)=> total+item) -- arrow funciton
const somatorio = Nros.reduce (function(total,item){
    return total + item;
});
//5
