let dinheiro_carteira=parseInt(prompt("seu saldo"))

let valo_compra=parseInt(prompt("sua compra"))

let mensagem=dinheiro_carteira-valo_compra

if (dinheiro_carteira>=valo_compra) {
    dinheiro_carteira=dinheiro_carteira-valo_compra
    alert(`sua compra foi aprovada seu saldo atual é de r$${mensagem}`)
}
else{
    alert("dinheiro insuficiente")
}
