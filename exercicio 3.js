let palavra  = "";
let opcao = "";

do {
    palavra = prompt("Digite uma palavra e complete o nome do filme")
    console.log(`A Hora do(a) ${palavra}`)
    console.log(`O(a) ${palavra} de OZ`)
    console.log(`11 homens e um(a) ${palavra}`)
    console.log(`${palavra} do Macacos`)
    console.log(`Procurando ${palavra}`)
    opcao = prompt("Deseja jogar novamente?\nDigite 'S' para Sim e 'N' para Não")
}
while (!(opcao == "N" || opcao == "n"))
   

console.log(" Valeu cara!! ");

