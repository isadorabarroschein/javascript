let resultadoDado;
let lancamentos =0;

while (resultadoDado !== 6) {
    resultadoDado = math.flor(math.random() * 6) + 1; // gera um número aleatorio de 1 a 6 
    lancamentos++;
    console.log(`Lançamento ${Lancamentos}: Resultado do lado ${resultadoDado}`);
}

console.log(`Finalmente! o número 6 foi obtido após ${lancamentos} lançamentos.`);

