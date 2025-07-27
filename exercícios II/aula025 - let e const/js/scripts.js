let x = 5;

const y = 10;

y = 12; // Não dá!

x = 12;

console.log(x);

if (true) {
    let x = 20;;

    console.log(x);

    const y = 50;

    console.log('const if ' + y);

}

console.log(x);