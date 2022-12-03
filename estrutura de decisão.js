let opção = "";
let numero = 0;

do {
    numero = parseInt(prompt("Digite um numero"))
    numero *= 2;
    console.log('O dobro deste numero é: ${numero}'); 

    opção = prompt("Deseja sair\nDigite 'S' para Sim e 'N' para não");
    
    
} while ( opção != "S" );

console.log("FIM")