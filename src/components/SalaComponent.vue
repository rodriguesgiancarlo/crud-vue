<template>
  <div class="row justify-content-center">
      <div>
        <h1>Nova Sala</h1>
        <form @submit.prevent="addSala">
            
            <div class="form-group">
                <label for="lotacao_maxima">Informe a Capaciadade máxima</label>
                <input type="number" class="form-control" id="lotacao_maxima" v-model="sala.lotacao_maxima" required>
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
                 sala:{}
            }
        },
    methods: {
        addSala(){
            let uri = 'http://localhost:3000/salas';
            this.axios.post(uri, this.sala).then((response) => {
                this.$router.push({name: 'salas'});
            });
        }
    }
  }
</script>