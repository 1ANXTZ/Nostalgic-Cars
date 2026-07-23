// Atualiza o ano automaticamente no rodapé

const ano = document.getElementById("ano");

if (ano) {
  ano.textContent = new Date().getFullYear();
}



// Animação de entrada dos cards quando aparecem na tela

const cards = document.querySelectorAll("article");


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},{
threshold:0.2
});



cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(30px)";
card.style.transition="0.6s";

observer.observe(card);

});




// Mensagem ao enviar formulário

const formulario = document.querySelector("form");


if(formulario){

formulario.addEventListener("submit",(evento)=>{

evento.preventDefault();


alert("Mensagem enviada com sucesso! 🚗");


formulario.reset();


});

}
