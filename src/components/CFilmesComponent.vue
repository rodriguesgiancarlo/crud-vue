<template>
  <div class="row justify-content-center">
      <div>
        <h1>Novo Filme</h1>
        <form @submit.prevent="addFilmes">
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
        <hr>
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
  </div>

  
</template>
<script>
    export default {
        data() {
            return {
                filme:{}
            }
        },

        async created(){
            try {
                const res = await axios.get(apiUrl);
                this.filme = res.data;
            } catch (error) {
                
            }
        },
        
    methods: {
        
        async addFilmes(){
            alert("Filme Cadastrado com Sucesso!");
            let uri = window.apiUrl + '/filmes';
            this.axios.post(uri, this.filme).then((response) => {
                this.$router.push({name: 'home'});
            });
        }
    }     
   }
</script>