<template>
    <div col="col-md-8 mt-4">
        <h1>Relatório de Tipos de Ingressos</h1>
        <div class="card text-white bg-dark" style="position: sticky; top:0;">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-2">ID</div>
                    <div class="col-md-6">TIPO DE INGRESSO</div>
                    <div class="col-md-4">VALOR</div>
                </div>
            </div>
        </div>
        <div class="card-body" v-for="tipoingresso in tipoingresso" :key="tipoingresso.id">
                <div class="row">
                    <div class="col-md-2">{{ tipoingresso.id }}</div>
                    <div class="col-md-6">{{ tipoingresso.descricao }}</div>
                    <div class="col-md-4">R${{ tipoingresso.valor }}</div>
                </div>
        </div>
        <div class="card-footer bg-dark"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tiposingresso:[]
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/tipoingresso').then(response => {
                this.tipoingresso = response.data;
            })
        }
    }
</script>