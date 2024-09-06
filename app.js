function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
        if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum animal encontrado. Você deve buscar pelo nome, tipo, porte, cor, raça, personalidade ou pelo sexo.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = ""; 
    let tipo = "";
    let porte = "";
    let cor = "";
    let raça = "";
    let personalidade = "";
    let sexo = "";

    // Itera sobre cada dado da lista de dadosAnimais
    for (let dado of dadosAnimais) {
        nome = dado.nome.toLowerCase()
        tipo = dado.tipo.toLowerCase()
        porte = dado.porte.toLowerCase()
        cor = dado.cor.toLowerCase()
        raça = dado.raça.toLowerCase()
        personalidade = dado.personalidade.toLowerCase()
        sexo = dado.sexo.toLowerCase()

        // mostra o resultado da busca pelo nome ou pelo sexo do animal
        if (nome.includes(campoPesquisa) || tipo
        .includes(campoPesquisa) || porte
        .includes(campoPesquisa)|| cor
        .includes(campoPesquisa)|| raça
        .includes(campoPesquisa)|| personalidade
        .includes(campoPesquisa)|| sexo
        .includes(campoPesquisa)
    ) {

            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">Animal: ${dado.tipo}</p>
                <p class="descricao-meta">Porte: ${dado.porte}</p>
                <p class="descricao-meta">Cor: ${dado.cor}</p>
                <p class="descricao-meta">Raça: ${dado.raça}</p>
                <p class="descricao-meta">Personlidade: ${dado.personalidade}</p>
                <p class="descricao-meta">Sexo: ${dado.sexo}</p>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Animal não encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}