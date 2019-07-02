<template>
  <div class="row justify-content-center">
        <div class="form">
        <h1>Filme: {{ filme.titulo }}</h1>
        <h3>Ano de Lançamento: {{ filme.ano_lancamento }}</h3>
        <h3>Idioma: {{ filme.idioma }}</h3>
        <h3>Duração: {{ filme.duracao }} minutos</h3>
        </div>
        <div v-if="filme.poster_link == ''"></div>
        <img v-bind:src="filme.poster_link">
        <div v-if="filme.trailer_link == ''"></div>
        <iframe width="440" height="250" v-bind:src="filme.trailer_link" frameborder="0" allowfullscreen></iframe>
        <h3>Sinopse:</h3>
        <p class="text-justify" style="max-width:600px"> {{ filme.sinopse }}</p>
        
  </div>

  
</template>

<script>
    export default {
        data(){
            return{
                 filme:{}
            }
        },
        created() {
            var uri = window.apiUrl+'/filmes/'+this.$route.params.id;
            this.axios.get(uri).then((response) => {
                this.filme = response.data;
            });
        }        
    }
</script>