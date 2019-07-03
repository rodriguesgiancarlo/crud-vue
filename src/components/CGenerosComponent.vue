<template>
  <div class="row justify-content-center">
        <form @submit.prevent="addGenero">
            <div class="form-group">
                <label for="genero"><h1>Novo Gênero</h1></label>
                <input type="text" class="form-control" id="genero" v-model="gen.genero">
            </div>
            
            <button class="btn btn-primary" type="submit">Salvar</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                gen:{}
            }
        },

        async created(){
            try {
                const res = await axios.get(apiUrl);
                this.gen = res.data;
            } catch (error) {
                
            }
        },
        
    methods: {
        
        async addGenero(){
            alert("Novo Gênero Cadastrado com Sucesso!");
            let uri = window.apiUrl + '/generos';
            this.axios.post(uri, this.gen).then((response) => {
                this.$router.push({name: 'home'});
            });
        }
    }     
   }
</script>