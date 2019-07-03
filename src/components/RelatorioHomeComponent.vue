<template>
    <div col="col-md-8 mt-4">
        <h1>Relatórios</h1>
        <div class="card text-white bg-dark" style="padding:10px;">
            <div class="botao card text bg-dark">
                <a type="button" class="btn btn-light" href="/relatorioUsuarios">Usuários</a>
            </div>
            <div class="botao card text bg-dark">
                <a type="button" class="btn btn-light" href="/relatorioGeneros">Gêneros dos Filmes</a>
            </div>
            <div class="botao card text bg-dark">
                <a type="button" class="btn btn-light" href="/relatorioSalas">Salas da Unidade</a>
            </div>
            <div class="botao card text bg-dark">
                <a type="button" class="btn btn-light" href="/relatorioTiposIngresso">Tipos de Ingresso</a>
            </div>
            <div class="botao card text bg-dark">
                <a type="button" class="btn btn-light" href="/relatorioFilmes">Filmes</a>
            </div>
            <div class="botao card text bg-dark">
                <a type="button" class="btn btn-light" href="/relatorioFilmesCartaz">Filmes em Cartaz</a>
            </div>
            <div class="card text bg-dark">
                <a type="button" class="btn btn-light" href="/relatorioIngressosVendidos">Ingressos Vendidos</a>
            </div>
        </div>
    </div>
</template>
<style>
.botao{
    margin-bottom:10px;
}
</style>
<script>
    export default {
    }
</script>