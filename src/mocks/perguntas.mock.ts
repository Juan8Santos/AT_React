type PerguntaEResposta = {
    pergunta: string;
    resposta: string;
    numExercicio: number;
}


export const perguntas: PerguntaEResposta[] = [
    {
        pergunta: "O Brasil é a seleção mais vitoriosa da Copa do Mundo?",
        resposta: "Sim, o Brasil é a seleção mais vitoriosa da Copa do Mundo, com 5 títulos.",
        numExercicio: 1
    },
    {
        pergunta: "Quais são as desvantagens de implementar um inline event?",
        resposta: "As desvantagens de implementar um inline event incluem dificuldade em manter o código, problemas com o gerenciamento de memória e dificuldade em testar o código.",
        numExercicio: 4
    }
]