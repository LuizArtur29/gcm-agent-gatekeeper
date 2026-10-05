function calcularDesconto(preco, categoria) {
    const desconto = 0.15;
    return preco - preco * desconto;
}

module.exports = { calcularDesconto };