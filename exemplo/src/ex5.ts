const somar:any = (a:any,b:number):any => a + b;
const nmr:number[] = [1,2,3,4];
const r:any = somar(...nmr);
console.log(r);
