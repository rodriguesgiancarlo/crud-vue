<template>
  <div class="row justify-content-center">
      <div>
        <form @submit.prevent="updateGen">
        
            <div class="form-group">
                <label for="genero">Gênero</label>
                <input type="text" class="form-control" id="genero" v-model="gen.genero">
            </div>
            
            <button class="btn btn-primary" type="submit">Salvar</button>
        </form>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                gen: {}
            }
        },
        created() {
            var uri = window.apiUrl+'/generos/'+this.$route.params.id;
            this.axios.get(uri).then((response) => {
                this.gen = response.data;
            });
        },
        methods: {
            updateGen() {
                var uri = window.apiUrl+'/generos/'+this.$route.params.id;
                this.axios.put(uri, this.gen).then((response) => {
                    this.$router.push({name: 'posts'});
                });
                
            }
        }
    }
</script>