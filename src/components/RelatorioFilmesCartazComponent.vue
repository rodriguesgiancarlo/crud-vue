<template>
    <div col="col-md-8 mt-4">
        <h1>Relatório de Filmes em Cartaz</h1>
        <div class="card text-white bg-dark" style="position: sticky; top:0;">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-2">ID</div>
                    <div class="col-md-4">FILME</div>
                    <div class="col-md-2">SALA</div>
                    <div class="col-md-2">HORÁRIO</div>
                    <div class="col-md-2">ATIVO</div>
                </div>
            </div>
        </div>
        <div class="card-body" v-for="cartaz in emcartaz" :key="cartaz.id">
                <div class="row">
                    <div class="col-md-2">{{ cartaz.id }}</div>
                    <div class="col-md-4">{{ (filmes.filter( element => element.id ==  cartaz.filme_id))[0].titulo }}</div>
                    <div class="col-md-2">{{ cartaz.sala_id }}</div>
                    <div class="col-md-2">{{ cartaz.horario }}</div>
                    <div class="col-md-2">{{ cartaz.ativo }}</div>
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
                emcartaz: []
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/filmes').then(response => {
                this.filmes = response.data;
            }),
            this.axios.get(window.apiUrl+'/emcartaz').then(response => {
                this.emcartaz = response.data;
            })
        }
    }
</script>