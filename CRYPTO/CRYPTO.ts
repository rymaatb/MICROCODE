

function fnt1(a: number, b: number, c: boolean = true): number {
        const d = 7;
        b = b % d;
        const e = 0b01111111;
      
        if (c) {
          return ((a >> b) | (a << (d - b))) & e;
        } else {
          return ((a << b) | (a >> (d - b))) & e;
        }
}
function fnt2(a:string, b = 0): string{
   // const nombreStr = a.toString();
    if (a.length === 0) return "";
    const c = a.substring(0, 3);
   // console.log(c);
   // const d = Number(c);
    const i = a.slice(3);
    //console.log(i);
    const g = parseInt(c,8);
   // console.log(g);
    const v = b + 1;
    const e = inverseFn(g,v);
   // console.log(e);
    const f = String.fromCharCode(e);
   // console.log(f);
    return f + fnt3(i,v);
}
function fnt3(a:string, b = 0): string{
  //  const nombreStr = a.toString();
    if (a.length === 0) return "";
    const c = a.substring(0, 3);
  //  console.log(c);
  //  const d = Number(c);
    const i = a.slice(3);
   // console.log(i);
    const g = parseInt(c,8);
   // console.log(g);
    const v = b + 1;
    const e = inverseFn(g,v,false);
   // console.log(e);
    const f = String.fromCharCode(e);
   // console.log(f);
    return f + fnt2(i,v);


}
function decryptt(a: string){
    const z = (a.length) / 3;
    if(z % 2 === 0){
        return fnt3(a);
    } else {
        return fnt2(a);
    }
}

function maindecrypt() {
   // console.log('ryma');
    //const test = '021061144144163';
    //const n = decryptt(test);
    const k = decryptt('057032056166010163157172001015034133162040113033116156072135141072027114004123064145100072156007173147163164013115134061020167121070047056135113162020113134135007164156147013002106173157145073027056004047166160145173026016130131145026001135136117072040105071002047032113040072113136116043027')
    //console.log('decrepted messenge :'+n);
    console.log('----DECRYPTED MESSAGE-----');
    console.log(k);
    console.log('--------------');


}
maindecrypt(); 
// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  
function inverseFn(a: number, b: number, c: boolean = true): number {
  //console.log(a,b,c);
    const d = 7;
    b = b % d;
    const e = 0b01111111;
  
    if (c) {
      return ((a >> b) | (a << (d - b))) & e;
    } else {
      return ((a << b) | (a >> (d - b))) & e;
    }
  }
  
  // Example usage
  //const result = inverseFn(49, 2, false); // This will return 72
  //console.log(result);