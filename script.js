const form = document.getElementById('form')
let linhas = ""

const nomes =  []
const telefones =  []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaQuantidade()

})

function adicionaLinha() {
    const inputNome = document.getElementById('nome').value
    const inputTelefone = document.getElementById('telefone').value
    
    if(telefones.includes(inputTelefone)) {
        alert(`O contato ${inputTelefone} já existe.`)
    } else {
        nomes.push(inputNome)
        telefones.push(inputTelefone)
    
        let linha = "<tr>"
        linha += `<td>${inputNome}</td>`
        linha += `<td>${inputTelefone}</td>`
        linha += `</tr>`
        
        linhas += linha
    }

    inputNome.value = ""
    inputTelefone.value = ""
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function pegaQuantidadeTelefone() {
    return telefones.length
}

function atualizaQuantidade() {
    const quantidade = pegaQuantidadeTelefone()
    
    document.getElementById('quantidade-contatos').innerHTML = quantidade
}