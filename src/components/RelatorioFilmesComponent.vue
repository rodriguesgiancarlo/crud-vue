<template>
    <div col="col-md-8 mt-4">
        <h1>Relatório de Filmes</h1>
        <div class="card text-white bg-dark" style="position: sticky; top:0;">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-1">ID</div>
                    <div class="col-md-4">TITULO</div>
                    <div class="col-md-2">GÊNERO</div>
                    <div class="col-md-1">ANO</div>
                    <div class="col-md-2">IDIOMA</div>
                    <div class="col-md-2">DURAÇÃO</div>
                </div>
            </div>
        </div>
        <div class="card-body" v-for="filme in filmes" :key="filme.id">
                <div class="row">
                    <div class="col-md-1">{{ filme.id }}</div>
                    <div class="col-md-4">{{ filme.titulo }}</div>
                    <div class="col-md-2">{{ (generos.filter( element => element.id == filme.genero_id))[0].genero }}</div>
                    <div class="col-md-1">{{ filme.ano_lancamento }}</div>
                    <div class="col-md-2">{{ filme.idioma }}</div>
                    <div class="col-md-2">{{ filme.duracao }}</div>
                </div>
        </div>
        <div class="card-footer bg-dark"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                filmes:[],
                generos:[]
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/filmes').then(response => {
                this.filmes = response.data;
            }),
            this.axios.get(window.apiUrl+'/generos').then(response => {
                this.generos = response.data;
            })
        }
    }
</script>