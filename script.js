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

//Evento para o Dialog;

const btn_newTransaction = document.getElementById('newTransaction')

btn_newTransaction.addEventListener('click' , ()=>{
    document.getElementById('transactionModal').showModal()
})

//Ligar o formulário do modal a esta função;

const form = document.getElementById('transactionForm')

form.addEventListener('submit' , (event)=>{
    event.preventDefault()

    //Capturar e Ler os valores dos 5 campos do formulário,

    const tipoInput = document.getElementById('modalType').value
    const descricaoInput = document.getElementById('modalDescription').value

    let valorString = document.getElementById('modalAmount').value
    const valorInput = parseFloat(valorString)

    const dataInput = document.getElementById('modalDate').value
    const categoriaInput = document.getElementById('modalCategory').value

    //Chamar adicionarTransacao(...);

    adicionarTransacao(tipoInput , descricaoInput , valorInput , dataInput , categoriaInput)

    //Fechar o modal;

    document.getElementById('transactionModal').close()

    //Limpa o formulário para a próxima abertura;

    form.reset()

})