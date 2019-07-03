<template>
    <div col="col-md-8 mt-4">
        <h1>Relatório de Ingressos Vendidos</h1>
        <div class="card text-white bg-dark" style="position: sticky; top:0;">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-4">FILME</div>
                    <div class="col-md-1">SALA</div>
                    <div class="col-md-2">HORARIO</div>
                    <div class="col-md-2">TIPO DE INGRESSO</div>
                    <div class="col-md-3">QUANTIDADE VENDIDO</div>
                </div>
            </div>
        </div>
        <div class="card-body" v-for="bilheteria in bilheterias" :key="bilheteria.emcartaz_id">
                <div class="row">
                    <div class="col-md-4">{{ (filmes.filter( element => element.id == (emcartaz.filter( element => element.id == bilheteria.emcartaz_id))[0].filme_id))[0].titulo }}</div>
                    <div class="col-md-1">{{ (emcartaz.filter( element => element.id == bilheteria.emcartaz_id))[0].sala_id }}</div>
                    <div class="col-md-2">{{ (emcartaz.filter( element => element.id == bilheteria.emcartaz_id))[0].horario }}</div>
                    <div class="col-md-3">{{ (tipoingresso.filter( element => element.id == bilheteria.tipoingresso_id))[0].descricao }}</div>
                    <div class="col-md-2">{{ bilheteria.quantidade }}</div>
                </div>
        </div>
        <div class="card-footer bg-dark"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                filmes: [],
                emcartaz: [],
                bilheterias: [],
                tipoingresso: []
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/filmes').then(response => {
                this.filmes = response.data;
            }),
            this.axios.get(window.apiUrl+'/emcartaz').then(response => {
                this.emcartaz = response.data;
            }),
            this.axios.get(window.apiUrl+'/bilheterias').then(response => {
                this.bilheterias = response.data;
            }),
            this.axios.get(window.apiUrl+'/tipoingresso').then(response => {
                this.tipoingresso = response.data;
            })
        }
    }
</script>