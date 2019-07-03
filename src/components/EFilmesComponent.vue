<template>
  <div class="row justify-content-center">
      <div>
        <h1>Alterar post</h1>
        <form @submit.prevent="updateFilme">
            
        <div class="form-row">
            <div class="form-group">
                <label for="titulo">Título</label>
                <input type="text" class="form-control" id="titulo" v-model="filme.titulo">
            </div>
            <div class="form-group">
                <label for="body">Ano Lançamento</label>
                <input class="form-control" id="ano_lancamento" rows="3" v-model="filme.ano_lancamento">
            </div>
            
            <div class="form-group">
                <label for="title">Idioma</label>
                <input type="text" class="form-control" id="idioma" v-model="filme.idioma">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label for="body">Duracao</label>
                <input class="form-control" id="duracao" rows="3" v-model="filme.duracao">
            </div>       
                <div class="form-group">
                <label for="body">Link do Poster</label>
                <input class="form-control" id="poster_link" rows="3" v-model="filme.poster_link">
            </div>
            <div class="form-group">
                <label for="body">Link do Trailer</label>
                <input class="form-control" id="trailer_link" rows="3" v-model="filme.trailer_link">
            </div>
            
        </div> 

        <div class="form-row">   

            <div class="form-group">
                <label for="title">Sinopse</label>
                <textarea type="text" class="form-control" id="sinopse" cols="80" rows="5" v-model="filme.sinopse"></textarea>
            </div>
        </div>
            <button class="btn btn-primary" type="submit" rows="3">Salvar</button>
        </form>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                filme: {}
            }
        },
        created() {
            var uri = window.apiUrl+'/filmes/'+this.$route.params.id;
            this.axios.get(uri).then((response) => {
                this.filme = response.data;
            });
        },
        methods: {
            updateFilme() {
                var uri = window.apiUrl+'/filmes/'+this.$route.params.id;
                this.axios.put(uri, this.filme).then((response) => {
                    this.$router.push({name: 'posts'});
                });
                
            }
        }
    }
</script>