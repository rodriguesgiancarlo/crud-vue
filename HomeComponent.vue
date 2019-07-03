<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">Filmes em Cartaz!</div>
          </div>
    <v-carousel>
     <router-link :to="{path: '/filmeEscolhido/:id', params: { id: filmes.id }}">
    <v-carousel-item
      v-for="(filme,id) in filmes"
      :key="id"
      :src="filme.poster_link"
    ></v-carousel-item>
    </router-link>
  </v-carousel>
      </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                 filmes:[]
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/filmes').then(response => {
                this.filmes = response.data;
            })
        }        
    }
</script>