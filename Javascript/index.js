const botaoTrailer = document.querySelector(".botao-trailer");
// const = tipo da variavel. Constante é algo que não muda, estamos usando porque nao iremos alterar nada nela;
// O simbolo de Igual = é usado para atribuir um valor;
// botaoTrailer = é a variavel que criamos para o .botao-trailer;
const botaoFecharModal = document.querySelector(".fechar-modal");
// Aqui estamos removendo a classe "aberto" para quando clicarmos no X fechar o trailer.
const video = document.getElementById("video");
// getElementById = Pegar um elemnto pelo ID;
// Se irmos no index.html la terá o id = video, e foi de lá que tiramos essa função.
const modal = document.querySelector(".modal");
// Aqui estamos criando a variavel da classe .modal que no caso colocamos apenas "modal" (podemos escolher qualquer nome);
const linkDoVideo = video.src;

function alternarModal(){
	// {} chaves = é a função, ela é usada para executar alguma função. No caso quando clicarmos no botaotrailer executa alguma coisa, um tipo de ação;
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
	// addEventListener = Adicionar um evento de escuta/ouvinte ;
	alternarModal();
	video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", "");
});