const projeto = {
    id: 1,
    descricao: 'Alura'
}

const proxy = new Proxy( projeto, {
    get(objetoOriginal, chave, receptor) {
        return Reflect.get(objetoOriginal, chave, receptor)
    },
    set(objetoOriginal, chave, valor) {
        objetoOriginal[chave] = valor
    }
})