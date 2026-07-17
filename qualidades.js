const qualities = [

{
title:"Determinado",
text:"Corre atrás dos seus objetivos e transforma seus sonhos em realidade."
},

{
title:"Gentil",
text:"Trata todas as pessoas com respeito, carinho e uma leveza que faz quem está perto se sentir bem."
},

{
title:"Amoroso",
text:"Ama sua família de um jeito lindo, demonstrando carinho, cuidado e presença."
},

{
title:"Amigável",
text:"Não mede esforços para ajudar os amigos e as pessoas próximas."
},

{
title:"Cuidadoso",
text:"Se preocupa com o bem-estar das pessoas ao seu redor e sempre pensa nos outros."
},

{
title:"Leal",
text:"Valoriza as pessoas que fazem parte da sua vida e permanece ao lado delas."
},

{
title:"Responsável",
text:"Leva seus compromissos a sério e sempre busca fazer o melhor."
},

{
title:"Corajoso",
text:"Tem coragem para enfrentar desafios e construir a vida que deseja."
},

{
title:"Persistente",
text:"Mesmo quando as coisas ficam difíceis, você continua tentando."
},

{
title:"Generoso",
text:"Tem um coração enorme e está sempre disposto a ajudar."
},

{
title:"Paciente",
text:"Sabe lidar com situações difíceis com calma e tranquilidade."
},

{
title:"Inteligente",
text:"Tem curiosidade, aprende rápido e busca sempre evoluir."
},

{
title:"Humilde",
text:"Mesmo com suas conquistas, continua sendo uma pessoa simples e verdadeira."
},

{
title:"Inspirador",
text:"Sua determinação inspira as pessoas que acompanham sua jornada."
},

{
title:"Aventureiro",
text:"Tem coragem para viver novas experiências e criar memórias."
},

{
title:"Companheiro",
text:"Torna a caminhada mais leve porque está disposto a dividir a vida."
},

{
title:"Dedicado",
text:"Quando coloca algo na cabeça, entrega o seu melhor."
},

{
title:"Organizado",
text:"Planeja seus passos e pensa no futuro."
},

{
title:"Positivo",
text:"Sempre tenta enxergar possibilidades mesmo diante dos desafios."
},

{
title:"Divertido",
text:"Tem um jeito único de tornar os momentos mais leves."
},

{
title:"Carinhoso",
text:"Amo a forma como você me trata, o quanto se preocupa comigo e demonstra carinho."
},

{
title:"Protetor",
text:"Quando estou com você, eu me sinto segura, amada e em paz."
},

{
title:"Meu parceiro",
text:"Sei que posso sempre contar com você em qualquer situação."
},

{
title:"Romântico",
text:"Você tem sensibilidade e sabe me agradar de formas especiais."
},

{
title:"Compreensivo",
text:"É paciente e sabe lidar com situações adversas com maturidade."
},

{
title:"Atencioso",
text:"Me faz sentir valorizada e importante nos pequenos detalhes."
},

{
title:"Confiável",
text:"É alguém em quem posso confiar e que transmite segurança."
},

{
title:"Verdadeiro",
text:"Você é autêntico e eu sinto que posso confiar em você sempre."
},

{
title:"Maduro",
text:"Sabe resolver questões de forma tranquila e pacífica."
},

{
title:"Sonhador",
text:"Sonha grande e, melhor ainda, alcança."
},

{
title:"Trabalhador",
text:"É dedicado e responsável. Tenho muito orgulho da sua história."
},

{
title:"Admirável",
text:"Te admiro como ser humano e sei que tenho muito a aprender com você."
},

{
title:"Especial",
text:"Você tem um jeito único e cativante. Tem uma luz incrível"
},

{
title:"Único",
text:"Você é uma pessoa verdadeira e cheia de amor."
},

{
title:"Meu amor ❤️",
text:"Se eu tivesse que resumir tudo em uma única qualidade, seria esta: você é alguém raro. A combinação da sua bondade, do seu caráter, do seu cuidado e de tudo o que faz de você quem você é torna você único."
}

];


const container = document.getElementById("qualities");

const modal = document.getElementById("modal");

const title = document.getElementById("title");

const text = document.getElementById("text");

const close = document.getElementById("close");



qualities.forEach((item,index)=>{


const button=document.createElement("button");


button.className="quality-button";


if(index===34){

button.classList.add("special");

}


button.innerHTML="❤️";


button.onclick=()=>{

title.innerHTML=item.title;

text.innerHTML=item.text;

modal.classList.remove("hidden");

};


container.appendChild(button);


});



close.onclick=()=>{

modal.classList.add("hidden");

};


modal.onclick=(e)=>{

if(e.target===modal){

modal.classList.add("hidden");

}

};
