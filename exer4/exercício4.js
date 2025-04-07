valorcompra = parseFloat(prompt("Digite o valor da compra:"));
if (valorcompra >= 100){// analisa se o valor da compra é maior ou igual a 100
    // se o valor for maior ou igual a 100, o usuário recebe um desconto de 10%
    alert(`Parabéns, você recebeu um desconto!!!Sua compra de R$${valorcompra} teve um desconto de 10% e o valor final é R$${(-valorcompra*0.1)+valorcompra}`);}
else { // se o valor for menor que 100, o usuário não recebe desconto
    alert(`Você não recebeu desconto. O valor final é R$${valorcompra}`);}