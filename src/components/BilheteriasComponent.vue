<template>
    <div>
      <h1>Bilheteria</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'comprar' }" class="btn btn-success">Comprar</router-link>
            </div>
        </div>
        <br/>

        <div class="card" v-for="cartaz in emcartaz" :key="cartaz.id">
            <div class="card-body"  v-if="cartaz.ativo">

                <h5 class="card-title">{{(filmes.filter( element => element.id ==cartaz.id))[0].titulo}}</h5>
                <p class="card-text"> Sala:{{ cartaz.sala_id  }}</p>
                <img v-bind:src="(filmes.filter( element => element.id ==cartaz.id))[0].poster_link" height="500px" />
                <p class="card-text">Sinopse:{{ (filmes.filter( element => element.id ==cartaz.id))[0].sinopse  }}</p>
                <p class="card-text">Duração:{{ (filmes.filter( element => element.id ==cartaz.id))[0].duracao  }}</p>

            </div>
        </div>
  </div>

</template>

<script>

    export default {
        data() {
            return {
                emcartaz: [],
                filmes: []
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/emcartaz').then(response => {
                this.emcartaz = response.data;
            }),
            this.axios.get(window.apiUrl+'/filmes').then(response => {
                this.filmes = response.data;
            })
        },

        methods: {
            deletePost(id) {
                this.axios.delete(window.apiUrl+'/posts/'+id).then(response => {
                    this.posts.splice(this.posts.indexOf(id), 1);
                });
            },
            getName(id) {
                this.axios.delete(window.apiUrl+'/filmes/'+id).then(response => {
                    this.filmes = response.data;
                });
            },
        },

        computed: {

        }
    }
</script>
