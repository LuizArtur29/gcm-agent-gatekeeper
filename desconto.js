function calcularDesconto(preco, categoria) {
    const desconto = 0.18;
    return preco - preco * desconto;
}

module.exports = { calcularDesconto };