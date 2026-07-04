//Carrega as transações guardadas no localStorage ou inicia um array vazio se for o primeiro acesso;

let transacoes = JSON.parse(localStorage.getItem('transacoes')) || []
console.log(transacoes)

//Função para adicionar uma Transação;

function adicionarTransacao(tipo , descricao , valor , data ,  categoria){
    const novaTransacao = {
        id: crypto.randomUUID(),
        type: tipo,
        description: descricao,
        amount: valor,
        date: data,
        category: categoria
    }

    //Adicionar ao array 'transacoes' global

    transacoes.push(novaTransacao)

    //Guardar os dados na memória;

    localStorage.setItem('transacoes' , JSON.stringify(transacoes))
}
