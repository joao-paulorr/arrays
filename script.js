// let nomes = ['Eduardo', 'Lucas', 'Alessandro', 'Penis', 'Rola', 'Pau', 'Buceta', ]
// let tamanho = nomes.length
// console.log(nomes)
// nomes.push('Carla')
// nomes.pop()
// nomes.pop()
// console.log(nomes)

// for(i=0; i<tamanho; i++) {
//     console.log(i + " - " + nomes[i])
// }
function array() {
    var nomes = []
    var nome = document.querySelector('#nome').value
    var res = document.querySelector('#res')
    nomes.push(nome)
    for (i = 0; i < nomes.length; i++) {
        res.innerHTML += nomes[i] + "<br>"
    }
}
function rola() {
    res.innerHTML = ""
}



