function calcularDesconto(preco, categoria) {
    const desconto = 0.35;
    return preco - preco * desconto;
}

module.exports = { calcularDesconto };