<template>
    <div col="col-md-8 mt-4">
        <h1>Relatório de Salas da Unidade</h1>
        <div class="card text-white bg-dark" style="position: sticky; top:0;">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-2">ID</div>
                    <div class="col-md-10">LOTAÇÃO MÁXIMA</div>
                </div>
            </div>
        </div>
        <div class="card-body" v-for="sala in salas" :key="sala.id">
                <div class="row">
                    <div class="col-md-2">{{ sala.id }}</div>
                    <div class="col-md-10">{{ sala.lotacao_maxima }}</div>
                </div>
        </div>
        <div class="card-footer bg-dark"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                salas:[]
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/salas').then(response => {
                this.salas = response.data;
            })
        }
    }
</script>