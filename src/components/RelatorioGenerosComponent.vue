<template>
    <div col="col-md-8 mt-4">
        <h1>Relatório de Gêneros</h1>
        <div class="card text-white bg-dark" style="position: sticky; top:0;">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-2">ID</div>
                    <div class="col-md-10">GÊNERO</div>
                </div>
            </div>
        </div>
        <div class="card-body" v-for="genero in generos" :key="genero.id">
                <div class="row">
                    <div class="col-md-2">{{ genero.id }}</div>
                    <div class="col-md-10">{{ genero.genero }}</div>
                </div>
        </div>
        <div class="card-footer bg-dark"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                generos:[]
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/generos').then(response => {
                this.generos = response.data;
            })
        }
    }
</script>