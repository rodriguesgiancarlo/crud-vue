<template>
    <div>
      <h1>Salas</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'salas' }" class="btn btn-danger">Nova Sala</router-link>
            </div>
        </div>
        <br/>


        <div class="card" v-for="sala in salas" :key="sala.id">
            <div class="card-body">
                <p class="card-text">{{ sala.id }}</p>
                <p class="card-text">{{ sala.lotacao_maxima }}</p>
                <router-link :to="{name: 'editcapacity', params: { id: sala.id }}" class="btn btn-primary">Editar</router-link>
                <button class="btn btn-danger" @click.prevent="deleteSala(sala.id)">Remover</button>
            </div>
        </div>
  </div>
    
</template>

<script>
    export default {
        data() {
            return {
                salas: []
            }
        },
        created() {
            let uri = 'http://localhost:3000/salas';
            this.axios.get(uri).then(response => {
                this.salas = response.data;
            })
        },

        methods: {
            deleteSala(id) {
                let uri = 'http://localhost:3000/salas/'+id;
                this.axios.delete(uri).then(response => {
                    this.salas.splice(this.salas.indexOf(id), 1);
                });
            }
        }
    }
</script>