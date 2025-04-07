valorcompra = parseFloat(prompt("Digite o valor da compra:"));
if (valorcompra >= 100){
    alert(`Parabéns, você recebeu um desconto!!!Sua compra de R$${valorcompra} teve um desconto de 10% e o valor final é R$${(-valorcompra*0.1)+valorcompra}`);} else {
    alert(`Você não recebeu desconto. O valor final é R$${valorcompra}`);}