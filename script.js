const perguntas = [
    {
        pergunta: "Qual é o nome do campeonato mundial de League of Legends?",
        respostas: [
            "Mundial de League",
            "Worlds",
            "Liga dos Campeões de LoL"
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o campeão mais escolhido em partidas profissionais de LoL?",
        respostas: [
            "Lee Sin",
            "Yasuo",
            "Ezreal"
        ],
        correta: 0
    },
    {
        pergunta: "Qual região é conhecida por sua dominância no cenário competitivo de League of Legends?",
        respostas: [
            "América do Norte",
            "Europa",
            "Coreia do Sul"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a rota onde geralmente o 'Top Laner' joga?",
        respostas: [
            "Meio",
            "Selva",
            "Topo"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome da empresa desenvolvedora do League of Legends?",
        respostas: [
            "Blizzard Entertainment",
            "Riot Games",
            "Valve Corporation"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do 'ADC' (Attack Damage Carry) em uma equipe de LoL?",
        respostas: [
            "Tankar",
            "Causar dano à distância",
            "Curar aliados"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do mapa principal de League of Legends?",
        respostas: [
            "Summoner's Rift",
            "Twisted Treeline",
            "Howling Abyss"
        ],
        correta: 0
    },
    {
        pergunta: "Quantos jogadores compõem uma equipe padrão de League of Legends?",
        respostas: [
            "3",
            "5",
            "7"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o recurso usado para desbloquear novos campeões em League of Legends?",
        respostas: [
            "Ouro",
            "Diamantes",
            "Pontos de Influência"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do campeão que é um yordle mecânico?",
        respostas: [
            "Teemo",
            "Riven",
            "Heimerdinger"
        ],
        correta: 2
    }
];

const template = document.querySelector("template")
const quiz = document.querySelector("#quiz")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").innerText = item.pergunta
    for(const resposta of item.respostas){
        const li = quizItem.querySelector("ul li").cloneNode(true)
        li.querySelector("span").innerText = resposta
        li.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
        li.querySelector("input").value = item.respostas.indexOf(resposta)
        li.querySelector("input").onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
        }
        quizItem.querySelector("ul").appendChild(li)
    }
    quizItem.querySelector("ul li").remove()
    quiz.appendChild(quizItem)
}