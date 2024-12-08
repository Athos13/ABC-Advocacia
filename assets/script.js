const form = document.getElementsByTagName('form')[0];
const nome = document.querySelector('#nome');
let resultado;

const menuBurguer = document.querySelector('header button');
const tracoCimaBurguer = document.querySelector('#traco-cima');
const tracoBaixoBurguer = document.querySelector('#traco-baixo');
const navLista = document.querySelector('header nav ul');
const linksNav =  document.querySelectorAll('header nav ul a');


function exibeEscondeMenu(){
    tracoCimaBurguer.classList.toggle('inclina-traco-cima');
    tracoBaixoBurguer.classList.toggle('inclina-traco-baixo');
    navLista.classList.toggle('mostrar')
}

menuBurguer.addEventListener('click', exibeEscondeMenu);

linksNav.forEach((link)=>{
    link.addEventListener('click', exibeEscondeMenu);
})

const decorEscritorio = document.getElementsByClassName("textDecor")[0]
/*Checa se sessão Sobre está aparecendo na tela ao dar scroll, se sim adiciona animação*/
function animaImgTextSobre(){
    const posicao = decorEscritorio.getBoundingClientRect()//retorna coordenadas do elemento
    const topo = posicao.top//pega a posição topo do elemento
    const base = posicao.bottom-200//pega a posição final do elemento e subtrai 200px
    
    if((topo >= 0) && (base <= window.innerHeight)){//window.innerHeight retorna altura em px da janela
        decorEscritorio.classList.add("animaDecorEscrito")
    }
}
document.addEventListener('scroll',animaImgTextSobre)




const atuacoes = document.querySelectorAll('#atuacao .container-atuacao .containerLista div');

function animaAtuacaoDireito(){

    atuacoes.forEach((atua)=>{ 
        const posicao = atua.getBoundingClientRect()//retorna coordenadas do elemento
        const topo = posicao.top//pega a posição topo do elemento
        const base = posicao.bottom-200//pega a posição final do elemento e subtrai 200px
        
        if((topo >= 0) && (base <= window.innerHeight)){//window.innerHeight retorna altura em px da janela
            atua.classList.add("animaAtuacao")
        }
    })

    
}

document.addEventListener('scroll',animaAtuacaoDireito)