const formulario = document.getElementById('cursoForm');

formulario.addEventListener('submit', function (evento){
    evento.preventDefault();

    const campoNome = document.getElementById('nome');
    const nomeCurso = campoNome.value;

    const campoCargaHoraria = document.getElementById('cargaHoraria');
    const cargaHoraria = Number (campoCargaHoraria.value);

    const campoCategoria = document.getElementById('categoria');
    const categoria = campoCategoria.value;

    const curso = {
        nome: nomeCurso,
        cargaHoraria: cargaHoraria,
        categoria: categoria
    };


    const resultado = document.getElementById('resultado');


    
    const cursoJson = JSON.stringify(curso);
    const cursoRecuperado = JSON.parse(cursoJson); //	Texto JSON → objeto
    
    resultado.textContent = cursoRecuperado.nome; 


    formulario.reset();
});

const botaoCarregar = document.getElementById('carregarCurso');

botaoCarregar.addEventListener('click', async function () {
    try{
    const resposta = await fetch ('curso.json');

    if(!resposta.ok) {
        alert('Erro ao carregar. Status: ' + resposta.status);
        return;
    }


    const cursoDoArquivo = await resposta.json();

    const resultado = document.getElementById('resultado');
    resultado.textContent = cursoDoArquivo.nome + ' - ' + cursoDoArquivo.cargaHoraria + ' horas - ' + cursoDoArquivo.categoria;

    }catch(erro){

    alert('Não foi possivel buscar ou ler os dados do curso.');
    }
});