function calcularDesconto(preco, categoria) {
    const desconto = 0.17;
    return preco - preco * desconto;
}

module.exports = { calcularDesconto };