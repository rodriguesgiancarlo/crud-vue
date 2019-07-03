
<template>
  <div class="row justify-content-center">
      <div>
        <h1>Alterar Capacidade</h1>
        <form @submit.prevent="updateSenha">
            
            <div class="form-group">
                <label for="lotacao_maxima">Informe a Capaciadade máxima</label>
                <input type="number" class="form-control" id="lotacao_maxima" v-model="sala.lotacao_maxima" required>
            </div>
            <button class="btn btn-primary" type="submit">Salvar alterações</button>
        </form>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                sala: {}
            }
        },
        created() {
            var uri = 'http://localhost:3000/salas/'+this.$route.params.id;
            this.axios.get(uri).then((response) => {
                this.sala = response.data;
            });
        },
        methods: {
            updateSenha() {
                var uri = 'http://localhost:3000/salas/'+this.$route.params.id;
                this.axios.put(uri, this.sala).then((response) => {
                    this.$router.push({name: 'salas'});
                });
                
            }
        }
    }
</script>