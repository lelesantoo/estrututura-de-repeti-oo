let multiplicando = 0;
let limite = 0;
let produto = 0;
let contador = 1;

multiplicando = parseInt(prompt("a tabuada de qual numero voce deseja montar?"))
limite = parseInt(prompt("até que numero a tabuada irá?"));

while (contador <= limite) {
    produto = multiplicando * contador;
    console.log(` ${multiplicando}) * ${contador} = ${produto} `);
    contador++;

}

console.log("fim do programa");