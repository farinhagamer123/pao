const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Voce gosta de pao?",
    alternativas:[ 
      {
        Texto: "claro",
        afirmação:"com queijo "
      },
      {
        Texto:"sim",
        afirmação: " bao "
      }
  
    ]
    },
        {
    enunciado: "bolsonaru vc gosta de paçoca",
    alternativas:[ 
     {
       Texto:"shiuuu",
       afirmação: "a"
     },
     {
       Texto:"mewing",
       afirmação: "b"
     }
    ]

    },
        {
    enunciado: "que pao",
    alternativas:[ 
    {
        Texto:"pao",
      afirmação: "ou"
    },
    {
      Texto:"batata",
      afirmação: "ata"
    }
    ]

    },
        {
    enunciado: "gosta de civic?",
    alternativas:[ 
     {
       Texto:"prefiro subaro",
      afirmação: "isso"
     },
     {
      Texto:"prefiro marea",
      afirmação: "bomba"
     }
    ]

    },
        {
    enunciado: "que um fusca",
    alternativas:[ 
     {
       Texto:"sim",
      afirmação: "uhh"
    },
    {
      Texto:"obvio que sim",
      afirmação: "ae"
    }
    ]

    },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResusltado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

}

function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas ) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.Texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
           
        caixaAlternativas.appendChild(botaoAlternativas);
   }

}
function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}
 function mostraResusltado(){
     caixaPerguntas.textContent = "pao";
     textoResultado.textContent = "EU SOU SEU PAI";
     caixaAlternativas.textContent = "";

 }

mostraPergunta();
