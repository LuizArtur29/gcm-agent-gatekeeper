function calcularDesconto(preco, categoria) {
    const desconto = 0.45;
    return preco - preco * desconto;
}

module.exports = { calcularDesconto };