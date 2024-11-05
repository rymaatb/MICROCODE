function fn1(a: number, b: number, c: boolean = true): number {
  const d = 7;
  b = b % d;
  const e = 0b01111111;

  if (c) {
    return ((a << b) | (a >> (d - b))) & e;
  } else {
    return ((a >> b) | (a << (d - b))) & e;
  }
}

function fn2(a: string, b = 0): string {
  if (a.length === 0) return "";

  const c = a[0];
  const d = c.charCodeAt(0);
  const e = fn1(d, ++b);
  const f = e.toString(8).padStart(3, "0");
  const g = a.slice(1);

  return f + fn3(g, b);
}

function fn3(a: string, b = 0): string {
  if (a.length === 0) return "";

  const c = a[0];
  const d = c.charCodeAt(0);
  const e = fn1(d, ++b, false);
  const f = e.toString(8).padStart(3, "0");
  const g = a.slice(1);
  return f + fn2(g, b);
}

function encrypt(a: string) {
  if (a.length % 2 === 0) {
    return fn3(a);
  } else {
    return fn2(a);
  }
}
function main() {
  
  console.log("Testing Encryption:");
  
    const encrypted = encrypt('HELLO');
    console.log(`Encrypted: "${encrypted}"`);
  }


main();
