<template>
    <div col="col-md-8 mt-4">
        <h1>Relatório de Usuários</h1>
        <div class="card text-white bg-dark" style="position: sticky; top:0;">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-2">ID</div>
                    <div class="col-md-10">USUARIO</div>
                </div>
            </div>
        </div>
        <div class="card-body" v-for="usuario in usuarios" :key="usuario.id">
                <div class="row">
                    <div class="col-md-2">{{ usuario.id }}</div>
                    <div class="col-md-10">{{ usuario.usuario }}</div>
                </div>
        </div>
        <div class="card-footer bg-dark"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                usuarios:[]
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/usuarios').then(response => {
                this.usuarios = response.data;
            })
        }
    }
</script>