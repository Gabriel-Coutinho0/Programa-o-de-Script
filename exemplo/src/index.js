soma = function (n,n1){
    return n + n1
}
sub = function(n1,n2){
    return n1 - n2
}
aleatorio = function (f,x,y){
    return f(x,y)
}
a = aleatorio(soma,1,2)
r = soma(10,26)
l = sub(10,11)
// console.log(r);
// console.log(l);
// console.log(a);


d = function(){
    console.log("Bom dia!");
}
k = function(){
    console.log("Tarde!");
}
c = function(f){
    f()
}

// c(d)
// c(k)

x = 1
x +=1
x +=1
// console.log(x);


A = async function(x,y){
    return x + y
}
L = A(1,2)
// console.log(L);
const epar = x => x % 2 === 0 ? "épar" : "Impar"

// console.log(epar(11));
