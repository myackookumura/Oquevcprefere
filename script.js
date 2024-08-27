const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Só ouvir a mesma música pelo resto da vida",
                afirmacao: "Krl você é foda"
            },
            {
                texto: "Nunca mais poder ouvir uma música mais de uma vez",
                afirmacao: "Krl você é foda"
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Viajar de graça por um ano",
                afirmacao: "obrigada(o)"
            },
            {
                texto: "Ganhar R$ 20 mil para gastar como quiser",
                afirmacao: "obrigada(o)"
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Passar uma semana perdido na floresta",
                afirmacao: "pela"
            },
            {
                texto: "Passar uma noite em uma casa mal-assombrada",
                afirmacao: "pela"
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "sua"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "sua"
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Ter o seu histórico do WhatsApp lido em rede nacional",
                afirmacao: "participação!!!"
            },
            {
                texto: "Nunca mais entrar em nenhuma rede social",
                afirmacao: "participação!!!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
