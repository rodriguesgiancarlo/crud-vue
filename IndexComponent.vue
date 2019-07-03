<template>
    <div>
      <h1>Filmes</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'cFilmes' }" class="btn btn-success">Novo Filme</router-link>
            </div>
        </div>
        <br/>        


        <div class="card" v-for="filme in filmes" :key="filme.id">
            <div class="card-body">
                <h5 class="card-title">{{ filme.titulo }}</h5>
                <router-link :to="{name: 'eFilmes', params: { id: filme.id }}" class="btn btn-primary">Editar</router-link>
                <button class="btn btn-danger" @click.prevent="deleteFilme(filme.id)">Remover</button>
            </div>
        </div>
<br>

      <h1>Gêneros</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'cGeneros' }" class="btn btn-success">Novo Gênero</router-link>
            </div>
        </div>
        <br/>        

<!--na versão atual do vue.js não é possível ter duas 'keys' com o mesmo valor, é necessário colocar um token para identificar como outro elemento-->
            <div class="card" v-for="i in gen" :key="'genToken-'+i.id">
                <div class="card-body">
                    <h5 class="card-title">{{ i.genero }}</h5>
                    <router-link :to="{name: 'eGeneros', params: { id: i.id }}" class="btn btn-primary">Editar</router-link>
                    <button class="btn btn-danger" @click.prevent="deleteGen(i.id)">Remover</button>
            </div>
        </div>

    </div>

    
</template>

<script>
    export default {
        data() {
            return {
                filmes: [],
                gen:[]
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/filmes').then(response => {
                this.filmes = response.data;
            })
            this.axios.get(window.apiUrl+'/generos').then(response => {
                this.gen = response.data;
            })
        },
        methods: {
            deleteFilme(id) {
                this.axios.delete(window.apiUrl+'/filmes/'+id).then(response => {
                    this.filmes.splice(this.filmes.indexOf(id), 1);
                });
            },
            deleteGen(id) {
                this.axios.delete(window.apiUrl+'/generos/'+id).then(response => {
                    this.gen.splice(this.gen.indexOf(id), 1);
                });
            },
        }
    }
</script>